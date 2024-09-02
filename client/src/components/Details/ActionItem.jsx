import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";
import { post } from "../../utils/paytm";
import { payUsingPaytm } from "../../service/api"

const BoxLeftCotainer = styled(Box)(({theme}) => ({
    minWidth : "40%",
    padding : "40px 0 0 80px",
    [theme.breakpoints.down('lg')]:{
        padding : "20px 40px"
    }
}))

const ImageStyle = styled('img')({
    width : "95%",
    padding : "15px"
})

const ButtonStyle = styled(Button)(({theme}) => ({
    width : "48%",
    height : "50px",
    borderRadius : "2px",
    [theme.breakpoints.down('lg')]:{
        width : "46%"
    },
    [theme.breakpoints.down('sm')]:{
        width : "48%"
    }
}))

const ActionItem = ({product}) => {
    const [ quantity, setQuantity ] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = product;

    const handleNavigation = () => {
        dispatch(addToCart(id,quantity));
        navigate('/cart');
    }

    const handleBuyNow = async() => {
        let res= await payUsingPaytm({ amount:500, email:"farhinbashira@gmail.com"});
        let information={
            action: 'https://securegw-stage.paytm.in/order/process',
            params: res
        }
        post(information);
    }

    return (
        <BoxLeftCotainer>
            <Box style={{padding : "15px 20px", border : "1px solid #f0f0f0", width : "90%"}}>
            <ImageStyle src={product.url} alt="product"/>
            </Box>
            <ButtonStyle onClick={handleNavigation} style={{marginRight: "10px",background: "#ff9f00"}} variant="contained"><ShoppingCartIcon/>Add to Cart</ButtonStyle>
            <ButtonStyle onClick={handleBuyNow} style={{background: "#fb541b"}} variant="contained"><FlashOnIcon/>Buy Now</ButtonStyle>
        </BoxLeftCotainer>
    )
}

export default ActionItem;
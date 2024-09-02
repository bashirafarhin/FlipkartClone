import { Box, styled, Typography, Button } from "@mui/material";
import { addEllipsis } from "../../utils/CommonUtil";
import GroupedButton from "./GroupedButton";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions.js";

const BoxWrapper = styled(Box)`
 border-top : 1px solid #f0f0f0;
 display : flex;
 background : #fff;
`
const BoxLeftComponent = styled(Box)`
 margin : 20px;
 font-size : 16px;
 color : #000;
 font-weight : 600;
 display : flex;
 flex-direction : column;
`

const TypographyStyle = styled(Typography)`
 color : #878787;
 font-size : 14px;
 margin-top : 10px;
`
const ButtonRemove = styled(Button)`
 margin-top : 20px;
 font-size: 16px;
`

const CartItem = ({item}) => {
    const dispatch = useDispatch();

    const handleRemoveItemFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <BoxWrapper>
            <BoxLeftComponent>
                <img style={{height : "110px", width:"110px"}} src={item.url} alt="product in cart"/>
                <GroupedButton/>
            </BoxLeftComponent>
            <Box style={{margin: "20px"}}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <TypographyStyle>Seller:RetailNet
                    <Box component="span"><img style={{width : "50px", marginLeft: "10px"}} src="https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50" alt="flipkart"/></Box>
                </TypographyStyle>
                <Typography style={{margin: "20px 0px"}}>
                    <Box style={{fontWeight: "600", fontSize: "18px"}} component="span">₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box style={{textDecoration: "line-through", color: "#878787"}} component="span">₹{item.price.mrp}</Box>&nbsp;&nbsp;&nbsp;
                    <Box style={{color: "#388E3C"}} component="span">{item.price.discount} off</Box>
                </Typography>
                <ButtonRemove onClick={() => handleRemoveItemFromCart(item.id)}>Remove</ButtonRemove>
            </Box>
        </BoxWrapper>
    )
}

export default CartItem;
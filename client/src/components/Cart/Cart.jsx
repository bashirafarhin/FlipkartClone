import { Box, Grid, styled, Typography, Button } from "@mui/material"
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCard from "./EmptyCard";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm"


const GridContainer= styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        padding: '15px 0'
    }
}));

const BoxHeader = styled(Box)`
 padding : 15px 24px;
 background : #fff;
`
const ButtonWrapper = styled(Box)`
 padding : 16px 22px;
 background : #fff;
 box-shadow : 0 -2px 10px rgb(0 0 0/10%);
 border-top : 1px solid #f0f0f0;
`
const ButtonStyle = styled(Button)`
 display : flex;
 margin-left : auto;
 background : #fb641b;
 color : #fff;
 width : 250px;
 height : 50px;
 border-radius : 2px;
 &:hover {
  opacity : 1;
  background : #fb641b;
 }
`
const GridLeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('md')]: {
        marginBottom: 15
    }
}));

const handleBuyNow = async() => {
    let res= await payUsingPaytm({ amount:500, email:"farhinbashira@gmail.com"});
    let information={
        action: 'https://securegw-stage.paytm.in/order/process',
        params: res
    }
    post(information);
}

const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);
    return (
        <>
        {
            cartItems.length?
            <GridContainer>
                <GridLeftComponent item lg={9} md={9} sm={12} xs={12}>
                    <BoxHeader>
                        <Typography>My Cart ({cartItems.length})</Typography>
                    </BoxHeader>
                    {
                        cartItems.map((item,index) => (
                            <CartItem key={index} item={item}/>
                        ))
                    }
                    <ButtonWrapper>
                        <ButtonStyle onClick={handleBuyNow}>Place Order</ButtonStyle>
                    </ButtonWrapper>
                </GridLeftComponent>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <TotalView cartItems={cartItems}/>
                </Grid>
            </GridContainer>
            : <EmptyCard/>
        }
        </>
    )
}

export default Cart;
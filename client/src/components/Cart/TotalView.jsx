import { Box, Typography, styled } from "@mui/material";
import { useState, useEffect } from "react";

const BoxHeading = styled(Box)`
 padding : 15px 24px;
 background: #fff;
 border-bottom: 1px solid #f0f0f0;
`

const TypographyHeading = styled(Typography)`
    color: #878787;
`;

const BoxContainer = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
    & > h6 {
        margin-bottom: 20px;
    }
`;

const BoxPrice = styled(Box)`
    float: right;
`;

const TypographyDiscount = styled(Typography)`
    font-size: 16px; 
    color: green;
    font-weight: 500;
`

const TotalView = ({cartItems}) => {

    const [ price, setPrice ] = useState(0);
    const [ discount, setDiscount ] = useState(0);
    
    useEffect(()=>{
        totalAmount();
    },[cartItems]);

    const totalAmount = () => {
        let price = 0, discount = 0;
        cartItems.map(item => {
            price += item.price.mrp
            discount += (item.price.mrp - item.price.cost) 
        })
        setPrice(price);
        setDiscount(discount);
    }

    return (
        <Box>
            <BoxHeading>
                <TypographyHeading>PRICE DETAILS</TypographyHeading>
            </BoxHeading>
            <BoxContainer>
                <Typography>Price ({cartItems?.length} item)
                <BoxPrice component="span">₹{price}</BoxPrice>
                </Typography>
                <Typography>Discount
                <BoxPrice component="span">-₹{discount}</BoxPrice>
                </Typography>
                <Typography>Delievery Charges
                <BoxPrice component="span">₹40</BoxPrice>
                </Typography>
                <Typography variant="h6">Total Amount
                <BoxPrice component="span">₹{price-discount+40}</BoxPrice>
                </Typography>
                <TypographyDiscount>You will save ₹{discount-40} on this order</TypographyDiscount>
            </BoxContainer>
        </Box>
    )
}

export default TotalView;
import { Typography, Box, styled, Table, TableBody, TableRow, TableCell } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const BoxStyle = styled(Box)`
 font-size : 14px;
 vertical-align : baseline;
 & > p {
  font-size : 14px;
  margin-top : 10px;
 }
`

const LocalOfferIconStyle = styled(LocalOfferIcon)`
 margin-right : 10px;
 color : #00CC00;
 font-size : 15px;
`
const TableRowStyle = styled(TableRow)`
 font-size : 14px;
 vertical-align : baseline;
 & > td {
  font-size : 14px;
  margin-top : 10px;
  border : none;
 }
`

const ProductDetail = ({product}) => {
    const date = (new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000))).toDateString();
    return (
        <>
        <Typography>{product.title.longTitle}</Typography>
        <Typography style={{marginTop: "5px", color: "#878787", fontSize: "14px"}}>
            8 ratings & 1 Reviews
            <Box component="span"><img style={{width: "77px", marginLeft: "20px"}} src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png' alt=""/></Box>
        </Typography>
        <Typography>
        <Box style={{fontSize: "28px"}} component="span">₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
        <Box style={{textDecoration: "line-through", color: "#878787"}} component="span">₹{product.price.mrp}</Box>&nbsp;&nbsp;&nbsp;
        <Box style={{color: "#388E3C"}} component="span">{product.price.discount} off</Box>
        </Typography>
        <Typography>Available Offers</Typography>
        <BoxStyle>
            <Typography><LocalOfferIconStyle/> Get ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above T&C</Typography>
            <Typography><LocalOfferIconStyle/> 5% Cashback on Flipkart Axis Bank Card T&C</Typography>
            <Typography><LocalOfferIconStyle/> lat ₹1000 off on HDFC Bank Credit Card EMI Txns, Tenure: 6 and 9 months, Min Txn Value: ₹15,000 T&C</Typography>
            <Typography><LocalOfferIconStyle/> et extra 6% off (price inclusive of cashback/coupon) T&C</Typography>
            <Typography><LocalOfferIconStyle/> Make a purchase and enjoy a surprise cashback/ coupon that you can redeem later! Know More</Typography>
            <Typography><LocalOfferIconStyle/> Get extra 42% off (price inclusive of cashback/coupon) T&C</Typography>
        </BoxStyle>
        <Table>
            <TableBody>
                <TableRowStyle>
                    <TableCell style={{ color : '#878787' }}>Delievery</TableCell>
                    <TableCell style={{ fontWeight : 600 }}>Delievery by {date} | ₹40</TableCell>
                </TableRowStyle>
                <TableRowStyle>
                    <TableCell style={{ color : '#878787' }}>Warranty</TableCell>
                    <TableCell >No Warranty</TableCell>
                </TableRowStyle>
                <TableRowStyle>
                    <TableCell style={{ color : '#878787' }}>Seller</TableCell>
                    <TableCell >
                        <Box style={{ color : '#2874f0' }} component="span">SuperComNet</Box>
                        <Typography>GST invoice available</Typography>
                        <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                    </TableCell>
                </TableRowStyle>
                <TableRowStyle>
                    <TableCell colSpan={2}>
                        <img style={{width : "390px"}} src='https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50' alt="flipkartpoints"/>
                    </TableCell>
                </TableRowStyle>
                <TableRowStyle>
                    <TableCell style={{ color : '#878787' }}>Description</TableCell>
                    <TableCell >{product.description}</TableCell>
                </TableRowStyle>
            </TableBody>
        </Table>
        </>
    )
}

export default ProductDetail;
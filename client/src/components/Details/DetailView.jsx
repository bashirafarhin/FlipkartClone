import { Box, styled, Typography, Grid } from "@mui/material"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions"
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const BoxStyle = styled(Box)`
 background : #F2F2F2;
 margin-top : 55px;
`

const GridStyle = styled(Grid)(({theme}) => ({
    background : "#FFFFFF",
    display : "flex",
    [theme.breakpoints.down('md')]:{
        margin : "0px"
    }
}))
 

const GridRightContainer = styled(Grid)`
 margin-top : 50px;
 padding-left : 25px;
 & > p {
 margin-top : 10px;
 }
`
const DetailView = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { loading, product } = useSelector(state=>state.getProductDetails);
    useEffect(()=>{
        if(product && id !=product.id)
            dispatch(getProductDetails(id))
    },[dispatch,id,product,loading]);
    
    return (
        <BoxStyle>
            {
                product && Object.keys(product).length &&
                <GridStyle container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product}/>
                    </Grid>
                    <GridRightContainer item lg={8} md={8} sm={8} xs={12}>
                        <ProductDetail product={product}/>
                    </GridRightContainer>
                </GridStyle>
            }
        </BoxStyle>
    )
}

export default DetailView;
import Slide from "./Slide"
import { Box, styled } from "@mui/material"

const BoxStyle = styled(Box)`
 display : flex;
`

const BoxLeftComponent = styled(Box)(({ theme }) => ({
    width : "83%",
    [theme.breakpoints.down('md')]: {
       display : "none"
    }
}));

const BoxRightComponent = styled(Box)(({ theme }) => ({
 background : "#FFFFFF",
 padding : "5px",
 marginTop : "10px",
 marginLeft : "10px",
 width : "17%",
 textAlign : "center",
 [theme.breakpoints.down('md')]: {
    display : "none"
 }
}));

const MidSlide = (props) => {
    return (
        <BoxStyle>
            <BoxLeftComponent>
            <Slide products={props.products} title={props.title} timer={props.timer}/>
            </BoxLeftComponent>
            <BoxRightComponent>
                <img style={{width : 217}} src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70" alt="ad"/>
            </BoxRightComponent>
        </BoxStyle>
    )
}

export default MidSlide;
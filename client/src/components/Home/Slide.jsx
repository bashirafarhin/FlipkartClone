import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Box, Typography, Button, styled, Divider } from "@mui/material"
import Countdown from "react-countdown"
import { useNavigate } from "react-router-dom";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const BoxStyle = styled(Box)`
 margin-top : 10px;
 background : #FFFFFF;
`
const BoxDeal= styled(Box)`
 padding : 15px 20px;
 display : flex;
`
const BoxTimer= styled(Box)`
 display : flex;
 margin-left : 10px;
 align-items : center;
 color : #7f7f7f;
`
const TypographyText = styled(Typography)`
 font-size : 22px;
 font-weight : 600;
 margin-right : 25px;
 line-height : 32px;
`
const ButtonViewAll = styled(Button)`
 margin-left : auto;
 background : #2874f0;
 border-radius : 2px;
 font-size : 13px;
 font-weight : 600;
`
const ImageStyle = styled('img')({
    width : 'auto',
    height : 150
})

const TypographyStyle = styled(Typography)`
 font-size : 14px;
 margin-top : 5px;
`

const Slide = (props) => {

    const navigate = useNavigate();

    const renderer = ({hours,minutes,seconds}) => {
        return <Box variant="span">{hours} : {minutes} : {seconds} Left</Box>;
    }

    const handleNavigation = (id) => {
        navigate(`product/${id}`);
    }
    return (
        <BoxStyle>
            <BoxDeal>
                <TypographyText>{props.title}</TypographyText>
                {
                    props.timer &&
                        <BoxTimer>
                            <img style={{width : 24}} src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg' alt="clock"/>
                            <Countdown date={Date.now()+5.04e+7} renderer={renderer}/>
                        </BoxTimer>
                }
                <ButtonViewAll variant="contained">View all</ButtonViewAll>
            </BoxDeal>
            <Divider/>
            <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            centerMode={true}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
        {
                props.products.map((product,index) =>(
                    <Box onClick={()=>handleNavigation(product.id)} key={index} textAlign="center" style={{padding : "25px 15px ", cursor : "pointer"}}>
                    <ImageStyle key={product.id} src={product.url} alt="product"/>
                    <TypographyStyle style={{fontWeight : 600, color : "#212121"}}>{product.title.shortTitle}</TypographyStyle>
                    <TypographyStyle style={{color : "green"}}>{product.discount}</TypographyStyle>
                    <TypographyStyle style={{color : "#212121"}}>{product.tagline}</TypographyStyle>
                    </Box>
                ))
        }
            </Carousel>
        </BoxStyle>
    )
}

export default Slide;
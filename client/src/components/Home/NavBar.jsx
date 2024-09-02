import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../constants/data";

const BoxStyle = styled(Box)(({ theme }) => ({
    display : "flex",
    margin : "55px 130px 0 130px",
    justifyContent : "space-between",
    overflow : "hidden",
    [theme.breakpoints.down('lg')]: {
       margin : 0
    }
}));

const BoxImgContainer = styled(Box)`
 padding : 12px 8px;
 text-align : center;
`

const TypographyStyle = styled(Typography)`
 font-size : 14px;
 font-weight : 600;
 font-family : inherit;
`

const NavBar = () => {
    return (
        <Box style={{background : "#fff"}}>
        <BoxStyle>
        {
            navData.map((data,index) => {
                return (
                    <BoxImgContainer key={index}>
                     <img  src={data.url} alt="" style={{width : 64}}/>
                     <TypographyStyle>{data.text}</TypographyStyle>
                    </BoxImgContainer>
                )
            })
        }
        </BoxStyle>
        </Box>
    )
}

export default NavBar;
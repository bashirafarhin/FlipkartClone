import { Grid, styled } from "@mui/material"
import { imageURL } from "../../constants/data";

const GridStyle = styled(Grid)`
 margin-top : 10px;
 justify-content : space-between;
`

const ImageStyle = styled('img')(({ theme }) => ({
    marginTop : "10px",
    width : "100%",
    display : 'flex',
    justifyContent : "space-between",
    [theme.breakpoints.down('md')]: {
        objectFit : 'cover',
        height : 120
    }
}));

const MidSection = () => {
    return (
        <>
        <GridStyle container >
            {
                imageURL.map((img,index) =>(
                    <Grid key={index} item lg={4} sm={4} md={12} xs={12}>
                    <img src={img} alt="image" style={{width : '100%'}}/>
                    </Grid>
                ))
            }
        </GridStyle>
        <ImageStyle src='https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50' alt=""/>
        </>
    )
}

export default MidSection;
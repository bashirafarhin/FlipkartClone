import { Box, styled, Typography } from "@mui/material";

const BoxWrapper= styled(Box)`
    width: 80%;
    height: 65vh;
    background: #fff;
    margin: 80px 140px;
`
const BoxContainer = styled(Box)`
    text-align: center;
    padding-top: 70px;
`;

const EmptyCard = () => {
    return (
        <BoxWrapper>
            <BoxContainer>
                <img style={{width : "15%"}} src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="empty cart"/>
                <Typography>Your Cart is empty!</Typography>
                <Typography>Add items to it now </Typography>
            </BoxContainer>
        </BoxWrapper>
    )
}

export default EmptyCard;
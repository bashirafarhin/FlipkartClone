import { AppBar, Toolbar, Box, Typography, Drawer, List, ListItem } from "@mui/material";
import { styled } from '@mui/system';
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const HeaderStyle = styled(AppBar)`
 background : #2874f0;
 height : 55px;
`

const BoxStyle = styled(Box)`
 margin-left : 12%;
 line-height : 0;
 cursor : pointer;
`

const TypographyStyle = styled(Typography)`
 font-size : 10px;
 font-style : italic;
`

const PlusImg = styled('img')({
    width : 10,
    height : 10,
    marginLeft : 4
})

const BoxButtonStyle = styled(Box)(({theme}) => ({
    margin : "0 5% 0 auto",
    [theme.breakpoints.down('md')]:{
        display : "none"
    }
}))

const MenuButton = styled(IconButton)(({theme}) => ({
    display : "none",
    [theme.breakpoints.down('md')]:{
        display : "block"
    }
}))

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/');
    }

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );

    return (
        <div>
            <HeaderStyle>
                <Toolbar style={{minHeight : "55px"}}>
                    <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                    >
                    <MenuIcon />
                    </MenuButton>
                    <Drawer open={open} onClose={handleClose}>
                    {list()}
                    </Drawer>

                    <BoxStyle onClick={handleNavigation}>
                        <img src={logoURL} alt="logo" style={{width: 75}}/>
                        <Box style={{display : "flex"}}>
                            <TypographyStyle>Explore&nbsp;
                                <Box component="span" style={{color : "yellow"}}>Plus</Box>
                            </TypographyStyle>
                            <PlusImg src={subURL} alt="plus symbol" />
                        </Box>
                    </BoxStyle>
                    <Search/>
                    <BoxButtonStyle>
                        <CustomButtons/>
                    </BoxButtonStyle>
                </Toolbar>
            </HeaderStyle>
        </div>
    )
}

export default Header;
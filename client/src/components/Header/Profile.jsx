import { Box, Typography, Menu, MenuItem, styled } from "@mui/material"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from "react";

const MenuStyle = styled(Menu)`
 margin-top : 5px;
`
const TypographyStyle = styled(Typography)`
 font-size : 14px;
 margin-left : 20px;
`

const Profile = (props) => {
    const [ open, setOpen ] = useState(false);

    const handleCLick = (event) => {
        setOpen(event.currentTarget);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleLogout = () => {
        props.setAccount('');
    }

    return (
        <>
        <Box onClick={handleCLick} style={{marginTop : 2,cursor : "pointer"}}>
            <Typography>{props.account}</Typography>
            <MenuStyle
              anchorEl={open}
              open={Boolean(open)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => { handleClose(); handleLogout();}}>
              <PowerSettingsNewIcon color="primary" fontSize="small"/>
              <TypographyStyle>Logout</TypographyStyle>
              </MenuItem>
            </MenuStyle>
        </Box>
        </>
    )
}

export default Profile;
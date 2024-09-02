import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header";
import { Box } from "@mui/material";

const RootLayout = () => {
    return (
        <>
        <Header/>
        <Box style={{marginTop : 54}}>
            <Outlet/>
        </Box>
        </>
    )
}

export default RootLayout;
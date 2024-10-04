import { Badge, Box, Button, styled, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Login from "../Login/Login";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BoxStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  "& > *": {
    marginRight: "40px !important",
    fontSize: "14px",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const BoxShoppingCart = styled(Box)(({ theme }) => ({
  display: "flex",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const ButtonStyle = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
  &:hover {
    background: #ffffff;
    box-shadow: none;
  }
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const handleLogin = () => {
    setOpen(true);
  };

  const { account, setAccount } = useContext(DataContext);

  const handleNavigation = () => {
    navigate("/cart");
  };

  return (
    <BoxStyle>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <ButtonStyle variant="contained" onClick={handleLogin}>
          Login
        </ButtonStyle>
      )}
      <Typography style={{ marginTop: 3, width: 135, cursor: 'pointer' }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3, cursor: 'pointer' }}>More</Typography>
      <BoxShoppingCart onClick={handleNavigation}>
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: "10px" }}>Cart</Typography>
      </BoxShoppingCart>
      <Login open={open} setOpen={setOpen} />
    </BoxStyle>
  );
};

export default CustomButtons;

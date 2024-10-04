import {
  Button,
  Dialog,
  styled,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { useContext, useState } from "react";
import { authenticateLogin, authenticateSignup } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const BoxStyle = styled(Box)`
  height: 70vh;
  width: 90vh;
  padding: 0;
  padding-top: 0;
`;
const BoxImageStyle = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 100%;
  width: 40%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;
const BoxInputFields = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  overflow: auto;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
const ButtonLogin = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  &:hover {
    background: #fb641b;
    box-shadow: none;
  }
`;
const ButtonRequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;

const TypographyStyle = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;
const TypographyCreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;
const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const TypographyError = styled(Typography)`
  font-size: 12px;
  color: #ff6161;
  margin-top: 10px;
  font-weight: 600;
`;

const Login = (props) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const { setAccount } = useContext(DataContext);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const handleClose = () => {
    props.setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };

  const handleToggle = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignup((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
  };

  const handleValueChange = (event) => {
    const { name, value } = event.target;
    setLogin((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    let response = await authenticateLogin(login);
    console.log(response);
    if (response.status == 200) {
      handleClose();
      setAccount(response.data.data.firstname);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <BoxStyle>
        <Box style={{ display: "flex", height: "100%" }}>
          <BoxImageStyle>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </BoxImageStyle>
          {account.view === "login" ? (
            <BoxInputFields>
              <TextField
                variant="standard"
                onChange={handleValueChange}
                name="username"
                label="Enter Username"
              />
              {error && (
                <TypographyError>
                  Please enter valid username or password
                </TypographyError>
              )}
              <TextField
                variant="standard"
                onChange={handleValueChange}
                name="password"
                label="Enter Password"
              />
              <TypographyStyle>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </TypographyStyle>
              <ButtonLogin onClick={handleLogin}>Login</ButtonLogin>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <ButtonRequestOTP>Request OTP</ButtonRequestOTP>
              <TypographyCreateAccount onClick={handleToggle}>
                New to Flipkart? Create an Account
              </TypographyCreateAccount>
            </BoxInputFields>
          ) : (
            <BoxInputFields>
              <TextField
                variant="standard"
                onChange={handleChange}
                name="firstname"
                label="Enter Firstname"
              />
              <TextField
                variant="standard"
                onChange={handleChange}
                name="lastname"
                label="Enter Lastname"
              />
              <TextField
                variant="standard"
                onChange={handleChange}
                name="username"
                label="Enter Username"
              />
              <TextField
                variant="standard"
                onChange={handleChange}
                name="email"
                label="Enter Email"
              />
              <TextField
                variant="standard"
                onChange={handleChange}
                name="password"
                label="Enter Password"
              />
              <TextField
                variant="standard"
                onChange={handleChange}
                name="phone"
                label="Enter Phone"
              />
              <ButtonLogin onClick={handleSignup}>Continue</ButtonLogin>
            </BoxInputFields>
          )}
        </Box>
      </BoxStyle>
    </Dialog>
  );
};

export default Login;

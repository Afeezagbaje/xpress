import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Typography from "@mui/material/Typography";
import logo from "../../assets/image/LOGO.svg";
import { styled } from "@mui/material/styles";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  buttonText?: string;
  text?: string;
  link: string;
}

const CustomButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontWeight: 700,
  padding: "8px 16px",
  border: "1px solid #039BF0",
  lineHeight: 1.5,
});

const Navbar: React.FC<NavbarProps> = ({
  buttonText = "Sign in",
  text = "Already have an account?",
  link,
}) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box className={styles.container} >
          <img src={logo} alt="logo" />
          <Box className={styles.account}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "400",
                color: "#606060",
                fontFamily: "Inter, sans-serif",
              }}
              className={styles.text}
              mr={3}
            >
              {text}
            </Typography>
            <CustomButton variant="outlined" href={link}>
              {buttonText}
            </CustomButton>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Navbar;

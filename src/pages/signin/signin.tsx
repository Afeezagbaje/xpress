import { Button, Typography } from "@mui/material";

import Box from "@mui/material/Box";
import Navbar from "../../component/navbar/Navbar";
import React from "react";
import styles from "./signin.module.scss";

const Signin = () => {
  return (
    <React.Fragment>
      <Navbar text="New to Xpress Rewards?" buttonText="Sign Up" link="/signup" />
      <Box className={styles.container}>
        <Box className={styles.signin}>
          <Box className={styles.header}>
            <Typography variant="h4" component="div" sx={{fontWeight: "500"}}>
              Welcome Back!
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#606060",
                fontSize: "12px",
                fontFamily: "Inter, san-serif",
                fontWeight: "400",
              }}
            >
              Sign in to your Xpress reward partner's dashboard
            </Typography>
          </Box>
          <form className={styles.form}>
            <Box className={styles.inputCon}>
              <label htmlFor="Email" className={styles.label}>
                Email Address
              </label>
              <input type="text" id="Email" />
            </Box>
            <Box className={styles.inputCon}>
              <label htmlFor="Password" className={styles.label}>
                Password
              </label>
              <input type="text" id="Password" />
              <Typography variant="body2" color="#606060" sx={{ fontWeight: "400", marginTop: "16px"}}>
                Forgot Password? <span id={styles.reset}>Reset it</span>
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              className={styles.button}
              fullWidth
              sx={{ marginBottom: "40px" }}
            >
              Sign in
            </Button>
          </form>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Signin;

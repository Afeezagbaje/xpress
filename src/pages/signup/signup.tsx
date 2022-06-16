import { Button, Typography } from "@mui/material";

import Box from "@mui/material/Box";
import DragAndDrop from "../../component/dragAndDrop/DragAndDrop";
import Navbar from "../../component/navbar/Navbar";
import React from "react";
import styles from "./signup.module.scss";

const Signup = () => {
  return (
    <React.Fragment>
      <Navbar link="/signin" />
      <Box className={styles.container}>
        <Box className={styles.signup}>
          <Box className={styles.header}>
            <Typography variant="h4" component="div" sx={{ fontWeight: "500" }}>
              Welcome to Xpress Rewards
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
              Complete the form below to get started
            </Typography>
          </Box>
          <form className={styles.form}>
            <Box className={styles.inputCon}>
              <label htmlFor="name" className={styles.label}>
                Business name
              </label>
              <input type="text" id="name" />
            </Box>
            <Box className={styles.inputCon}>
              <label htmlFor="email" className={styles.label}>
                Business Email Address
              </label>
              <input type="text" id="email" />
            </Box>
            <Box className={styles.inputCon}>
              <label htmlFor="number" className={styles.label}>
                Business Phone Number
              </label>
              <input type="text" id="number" />
            </Box>
            <Box className={styles.inputCon}>
              <label htmlFor="category" className={styles.label}>
                Business category
              </label>
              <input type="dropdown" id="category" />
            </Box>
            <Box className={styles.inputCon}>
              <label htmlFor="account" className={styles.label}>
                Account No
              </label>
              <select id="account" className={styles.select} />
            </Box>
            <DragAndDrop />
            <Box className={styles.bottomContainer}>
              <Box className={styles.bottom}>
                <Button
                  variant="contained"
                  color="primary"
                  className={styles.button}
                  size="large"
                >
                  Next
                </Button>
                <Typography variant="body2" color="#808080" sx={{ marginLeft: "10px" }}>Step 1 or 2</Typography>
              </Box>
              <Box></Box>
            </Box>
          </form>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Signup;

import { AiOutlineCloudDownload } from "react-icons/ai";
import { AiOutlinePaperClip } from "react-icons/ai";
import Button from "@mui/material/Button";
import { IconContext } from "react-icons";
import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import styles from "./DragAndDrop.module.scss";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.4,
  backgroundColor: "#039BF0",
  borderColor: "#039BF0",
  "&:hover": {
    backgroundColor: "#039BF0",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const DragAndDrop = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <label htmlFor="file" className={styles.label}>Image (Logo)</label>
        <div className={styles.dragArea}>
          <div className={styles.iconContainer}>
            <IconContext.Provider value={{ color: "#039BF0", size: "50px" }}>
              <AiOutlineCloudDownload />
            </IconContext.Provider>
          </div>
          <Typography variant="body2" color="#1A141F">
            Drag here or click the button below to upload
          </Typography>
          <BootstrapButton
            variant="contained"
            startIcon={<AiOutlinePaperClip />}
            sx={{ margin: "20px" }}
          >
            Choose file
          </BootstrapButton>
          <input type="file" id="image" hidden />
          <Typography variant="body2" color="#4B3A5A">
            Maximum Upload size: 10MB (.jpg)
          </Typography>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DragAndDrop;

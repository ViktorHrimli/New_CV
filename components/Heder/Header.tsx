import { Box, Container, CssBaseline, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import Message from "../Message/Message";
import Navigations from "../Nav/Navigations";

type Props = {};

const Header = (props: Props): JSX.Element => {
  const [onShow, setonShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setonShow(true);
    }, 500);
    return () => {};
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <h1 style={{ color: "white", marginRight: 100 }}>
        Viktor Hrimli <br />
        Junior Frontend Developer
      </h1>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "200px",
          bgcolor: "#101a24",
          opacity: 0.8,
          borderRadius: "20px",
          width: "400px",
          height: "400px",
          padding: "20px",
          boxShadow:
            "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
        }}
      >
        <Message />
      </Box>
      <Navigations />
    </Box>
  );
};

export default Header;

import { Box, Container, CssBaseline, Slide } from "@mui/material";
import Message from "../Message/Message";
import React, { useEffect, useState } from "react";

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
    <>
      <CssBaseline />
      <Slide direction="down" in={onShow}>
        {
          <Container maxWidth="xs">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
                bgcolor: "#a6c1d6",
                borderTopLeftRadius: "30px",
                borderBottomRightRadius: "30px",
                height: "350px",
                padding: "20px",
                boxShadow:
                  "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
              }}
            >
              <Message />
            </Box>
          </Container>
        }
      </Slide>
    </>
  );
};

export default Header;

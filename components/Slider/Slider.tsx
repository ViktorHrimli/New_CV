import React, { useState } from "react";
import { Box, Container, Slide } from "@mui/material";
import Card from "../Card/Card";

type Props = {};

const Slider = (props: Props) => {
  const [onShow, setOnShow] = useState(true);
  return (
    <Slide direction="down" in={onShow}>
      {
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
              opacity: 1,
              backgroundImage:
                "url(https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg)",
              borderTopLeftRadius: "30px",
              borderBottomRightRadius: "30px",
              height: "370px",
              padding: "20px",
              boxShadow:
                "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
            }}
          >
            <Card />
          </Box>
        </Container>
      }
    </Slide>
  );
};
export default Slider;

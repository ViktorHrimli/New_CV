import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { MessageParagraph } from "./Message.styled";

type Props = {};

const Message = (props: Props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gridGap: "72px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "70px",
            display: "block",
            width: "250px",
            height: "250px",
            backgroundColor: "wheat",
            borderRadius: "50%",
          }}
        ></Box>

        <Box sx={{ marginTop: "150px" }}>
          <MessageParagraph>
            Hi, i`m a Software Developer adept one year in bringing forth
            expertise in installation, testing and maintenance of software
            systems and I like it. In addition i have eight my project and three
            team project. I want becam strong developer thats why i study
            everyday. But i want find team and probably friends where i can
            deploy my goal.
          </MessageParagraph>
        </Box>
      </Box>
    </>
  );
};

export default Message;

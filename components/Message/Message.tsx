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
          gridGap: "20px",
        }}
      >
        <Box
          sx={{
            display: "block",
            width: "250px",
            height: "250px",
            backgroundColor: "wheat",
            borderRadius: "50%",
          }}
        >
          <></>
        </Box>

        <Box sx={{ marginTop: "auto" }}>
          <MessageParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            beatae iusto. Itaque iusto cum, iste, qui at totam aliquam
            temporibus nesciunt facere voluptatum saepe facilis voluptatibus.
            Totam esse dolor a..
          </MessageParagraph>
        </Box>
      </Box>
    </>
  );
};

export default Message;

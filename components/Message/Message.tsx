import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
type Props = {};

const Message = (props: Props) => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <strong>Hi Im Viktor Hrimli</strong>
        <Image src="/IMG_0080.JPG" width="150" height="100" alt="My photo" />
      </Box>
    </>
  );
};

export default Message;

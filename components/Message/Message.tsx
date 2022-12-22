import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
type Props = {};

const Message = (props: Props) => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Image src="/IMG_0080.JPG" width="150" height="100" alt="My photo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          beatae iusto. Itaque iusto cum, iste, qui at totam aliquam temporibus
          nesciunt facere voluptatum saepe facilis voluptatibus. Totam esse
          dolor a..
        </p>
      </Box>
    </>
  );
};

export default Message;

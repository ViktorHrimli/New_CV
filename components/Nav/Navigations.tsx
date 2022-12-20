import React from "react";
import Link from "next/link";
import { Box } from "@mui/material";

type Props = {};

const Navigations = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        marginLeft: "auto",
        color: "wheat",
        marginTop: "20px",
      }}
    >
      <Link href={"resume"}>Resume</Link>
    </Box>
  );
};

export default Navigations;

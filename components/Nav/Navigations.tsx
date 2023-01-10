import React from "react";
import Link from "next/link";
import { Box } from "@mui/material";

type Props = {};

const Navigations = (props: Props) => {
  return (
    <Box
      sx={{
        display: "block",
        marginLeft: "auto",
        height: 20,
        color: "wheat",
        marginTop: "20px",
      }}
    >
      <Link style={{ color: "black", fontWeight: 600 }} href={"resume"}>
        Resume
      </Link>
    </Box>
  );
};

export default Navigations;

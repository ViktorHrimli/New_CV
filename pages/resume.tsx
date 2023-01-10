import React from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";

type Props = {};

const Resume = (props: Props) => {
  const router = useRouter();
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginLeft: "30px", marginTop: "30px" }}
        onClick={() => {
          router.push("/");
        }}
      >
        Back
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "40px",
        }}
      >
        <iframe
          src="https://drive.google.com/file/d/196VWskRMueMuNfLTWxvI7H37tmH6Mewm/preview"
          width="640"
          height="900"
          allow="autoplay"
        />

        <Button variant="contained" color="success" sx={{ marginTop: "30px" }}>
          <a href="https://drive.google.com/uc?export=download&id=196VWskRMueMuNfLTWxvI7H37tmH6Mewm">
            Upload Resume
          </a>
        </Button>
      </Box>
    </>
  );
};

export default Resume;

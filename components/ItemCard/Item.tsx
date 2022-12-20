import React, { useEffect, useState } from "react";
import {
  BlogSlyder,
  CardButton,
  ConteinerCardText,
  TitleCard,
  TitleList,
} from "./Item.styled";
import { Box, Skeleton } from "@mui/material";
import { FcList } from "react-icons/fc";

type PropsItem = {
  id: number;
  title: string;
  discriptions: string;
  stack: Array<string>;
  role: string;
  img: string;
  page: string;
  git: string;
};

const Item = ({
  discriptions,
  git,
  img,
  page,
  role,
  stack,
  title,
}: PropsItem): JSX.Element => {
  const [arrLength, setArrLength] = useState(() => {
    if (stack.length > 7) return stack.slice(8);
  });

  return (
    <BlogSlyder>
      <Box
        sx={{
          display: "flex",
          gridGap: "20px",
        }}
      >
        <Box sx={{ width: "300px", height: "290px", bgcolor: "black" }}>
          <picture>
            {/* <img src={img} alt="Photo" width="250" height="250" /> */}
          </picture>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gridGap: "20px",
            width: "500px",
          }}
        >
          <TitleCard>
            <h3>{title}</h3>
            <ConteinerCardText>
              <strong>Discriptions:</strong> <p>{discriptions}</p>
            </ConteinerCardText>

            <ConteinerCardText>
              <strong>Role: </strong>
              <p>{role}</p>
            </ConteinerCardText>
          </TitleCard>

          <ConteinerCardText style={{ alignItems: "flex-start" }}>
            <strong>Stack:</strong>
            <p>{stack.join(" ")}</p>
          </ConteinerCardText>
          <ConteinerCardText>
            <a href={page}>
              <CardButton type="button">Live Page</CardButton>
            </a>
            <a href={git}>GitHub</a>
          </ConteinerCardText>
        </Box>
      </Box>
    </BlogSlyder>
  );
};

export default Item;

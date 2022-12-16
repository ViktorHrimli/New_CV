import React from "react";
import { BlogSlyder } from "./Item.styled";
import { Box } from "@mui/material";
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
  return (
    <BlogSlyder>
      <Box sx={{ display: "flex", gridGap: "20px" }}>
        <div>
          <picture>
            <img src={img} alt="Photo" width="250" height="250" />
          </picture>
        </div>
        <div>
          <span>
            {title} <FcList />
            <p>Discriptions: {discriptions}</p>
            <p>Role : {role}</p>
          </span>

          <div>
            <p>Stack</p>
            <ul>
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div></div>

          <a href={page}>
            <button type="button">Live Page</button>
          </a>

          <a href={git}>GitHub</a>
        </div>
      </Box>
    </BlogSlyder>
  );
};

export default Item;

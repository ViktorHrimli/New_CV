import React from "react";
import { BlogSlyder } from "./Item.styled";
import { Box } from "@mui/material";
import { FcList } from "react-icons/fc";

type Props = {};

const Item = (props: Props): JSX.Element => {
  return (
    <BlogSlyder>
      <Box sx={{ display: "flex", gridGap: "20px" }}>
        <div>
          <picture>
            <img
              src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
              alt="Photo"
              width="250"
              height="250"
            />
          </picture>
        </div>
        <div>
          <span>
            Discription project <FcList />
          </span>

          <div>Stack</div>
          <div>{}</div>
          <a href="#">
            <button type="button">Live Page</button>
          </a>
        </div>
      </Box>
    </BlogSlyder>
  );
};

export default Item;

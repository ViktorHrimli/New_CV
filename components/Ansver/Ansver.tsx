import React from "react";
import { Box, Container } from "@mui/material";

type Props = {};

const objQuestions = {
  questions:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis  nihil, quasi molestias reprehenderit, placeat rerum repellat fuga debitis earum velit culpa explicabo? Tenetur, nulla. Sunt placeat eligendi praesentium provident neque?",
  questions1: "ansver",
};

const Ansver = (props: Props) => {
  return (
    <Container maxWidth="lg">
      <ul>
        {Object.entries(objQuestions).map((item, id) => (
          <li key={id}>
            <strong>{item[0]}</strong> <p>{item[1]}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Ansver;

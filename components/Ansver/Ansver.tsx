import React from "react";
import { Box, Container } from "@mui/material";
import { QuestionList, QuestionItem } from "./Ansver.syled";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

type Props = {};

const objQuestions = {
  "Tell me about yourself?":
    "I`m full-stack developer with one years practical experience. I have eight projects with different stack technologies and difficulties",
  "What are your biggest strengths and weaknesses?":
    "I consider my strength to be that I know what and who I want to become, I only need the opportunity and time ",
  "Why did you leave your last job?":
    "That is why, on the front, I have achieved the maximum at my right, and there was nowhere else to develop.",
  "Tell me about the biggest challenge you’ve ever had?": "",
};

const Ansver = (props: Props) => {
  return (
    <Container maxWidth="xs" sx={{ marginBottom: "50px" }}>
      <QuestionList>
        {Object.entries(objQuestions).map((item, id) => (
          <QuestionItem key={id}>
            <strong
              style={{
                textAlign: "start",
                letterSpacing: "0.01em",
              }}
            >
              <RecordVoiceOverIcon
                sx={{ position: "absolute", top: "3px", left: "3px" }}
              />
              {item[0]}
            </strong>
            <p>{item[1]}</p>
          </QuestionItem>
        ))}
      </QuestionList>
    </Container>
  );
};

export default Ansver;

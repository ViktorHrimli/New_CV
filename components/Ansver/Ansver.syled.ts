import styled from "@emotion/styled";

export const QuestionItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 200px;

  grid-gap: 10px;
  border-radius: 8px;
  padding: 20px;

  background-color: #101a24;
`;

export const QuestionList = styled.ul`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 300px 300px;
  grid-gap: 30px;
`;

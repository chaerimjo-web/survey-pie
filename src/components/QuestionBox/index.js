import styled from "styled-components";

import ActionButtons from "../ActionButtons";
import Body from "../Body";
import Desc from "../Desc";
import Title from "../Title";

function QuestionBox({ question, step, questionsLength, answer, setAnswer, options }) {
  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body type={question.type} answer={answer} setAnswer={setAnswer} options={question.options} />
      <ActionButtons step={step} questionsLength={questionsLength} />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default QuestionBox;

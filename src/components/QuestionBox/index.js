import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import useCurrentQuestion from "../../hooks/useCurrentQuestion";
import answersState from "../../store/answers/atom";
import ActionButtons from "../ActionButtons";
import Body from "../Body";
import Desc from "../Desc";
import Title from "../Title";

function QuestionBox() {
  const params = useParams();

  const step = parseInt(params.step);
  const [answers, setAnswers] = useRecoilState(answersState);

  const answer = answers[step];

  const setAnswer = (newAnswer) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[step] = newAnswer;
      return newAnswers;
    });
  };

  const question = useCurrentQuestion();

  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
      <ActionButtons />
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

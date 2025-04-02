import styled from "styled-components";

import useCurrentAnswer from "../../hooks/useCurrentAnswer";
import useCurrentQuestion from "../../hooks/useCurrentQuestion";
import ActionButtons from "../ActionButtons";
import Body from "../Body";
import Desc from "../Desc";
import Title from "../Title";

function QuestionBox() {
  const [answer, setAnswer] = useCurrentAnswer(); 
  const question = useCurrentQuestion(); //언디파인

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

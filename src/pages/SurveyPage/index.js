import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import ProgressIndicator from "../../components/ProgressIndicator";
import QuestionBox from "../../components/QuestionBox";

function SurveyPage() {
  const params = useParams();//꺼내기
  // console.log('params', params);
  
  const questions = [
    {
      title: "질문1 입니다",
      desc: "설명1 입니다.",
      type: "text",
      required: false,
      options: {
        placeholder: "placeholder입니다."
      },
    },
    {
      title: "질문2 입니다",
      desc: "설명2 입니다.",
      type: "textarea",
      required: false,
      options: {
        placeholder: "placeholder입니다.",
      },
    },
    {
      title: "질문3 입니다",
      desc: "설명3 입니다.",
      type: "select",
      required: false,
      options: {
        items: ['답변1','답변2','답변3','답변4','답변5']
      },
    }
  ];

  const step = parseInt(params.step); //숫자형태의 함수로 변경
  const [answers, setAnswers] = useState([]); //데이터 타입 -> 배열
  return (
    <SurveyPageWrapper>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        step={step}
        questionsLength={questions.length}
        answer={answers[step]} //현재의 질문 answer
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
        options={questions.options}
      />
    </SurveyPageWrapper>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;

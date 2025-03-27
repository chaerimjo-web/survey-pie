import { useState } from "react";
import { useParams } from "react-router-dom";

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
      options: {},
    },
    {
      title: "질문2 입니다",
      desc: "설명2 입니다.",
      type: "text",
      required: false,
      options: {},
    },
  ];

  const step = parseInt(params.step); //숫자형태의 함수로 변경
  const [answers, setAnswers] = useState([]); //데이터 타입 -> 배열
  return (
    <div>
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
      />
    </div>
  );
}

export default SurveyPage;

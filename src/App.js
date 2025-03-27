import {useState} from 'react';

import ProgressIndicator from "./components/ProgressIndicator";
import QuestionBox from "./components/QuestionBox";


function App() {
  const questions = [
    {
      title: '질문1 입니다', 
      desc: '설명1 입니다.', 
      type:'text', 
      required: false, 
      options: {}
    },
    {
      title: '질문1 입니다', 
      desc: '설명1 입니다.', 
      type:'text', 
      required: false, 
      options: {}
    }
  ]

  const step = 0;
  const [answers, setAnswers] = useState([]); //데이터 타입 -> 배열 

  return (
    <div className="App">
      <ProgressIndicator/>
      <QuestionBox question={questions[step]} 
      step={step} 
      questionsLength={questions.length} 
      answer={answers[step]} //현재의 질문 answer

      setAnswer={(newAnswer)=>{
        setAnswers((answers)=>{
          const newAnswers = [...answers];
          newAnswers[step] = newAnswer;
          return newAnswers;
        })
      }}

      />
    </div>
  );
}

export default App;

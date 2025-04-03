import { useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import useAnswers from "../../hooks/useAnswers";
import useRequiredOption from "../../hooks/useRequiredOption";
import useStep from "../../hooks/useStep";
import useSurveyId from "../../hooks/useSurveyId";
import postAnswers from "../../services/postAnswers";
import questionsLengthState from "../../store/survey/questionsLengthState";
import Button from "../Button";

function ActionButtons() {
  const step = useStep();
  const surveyId = useSurveyId();
  const isRequired = useRequiredOption();
  const answers = useAnswers();
  const [isPosting, setIsPosting] = useState(false);
  const questionsLength = useRecoilValue(questionsLengthState);
  const isBlockToNext = isRequired ? !answers[step]?.length : false;

  const isLast = questionsLength - 1 === step;
  const navigate = useNavigate();
  return (
    <ActionButtonsWrapper>
      {step === 0 || (
        <Button
          type="SECONDARY"
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type="PRIMARY"
          onClick={() => {
            setIsPosting(true); 
            postAnswers(surveyId, answers)
              .then(() => {
                navigate(`/done/${surveyId}`);
              })
              .catch((err) => {
                alert("페이지를 찾지 못했습니다. 다시 시도해주세요.");
                setIsPosting(false);
              });
          }}
          disabled={isPosting || isBlockToNext}
        >
          {isPosting ? "제출 중입니다..." : "제출"}
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate(`${step + 1}`);
          }}
          disabled={isBlockToNext}
        >
          다음
        </Button>
      )}
    </ActionButtonsWrapper>
  );
}

const ActionButtonsWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export default ActionButtons;

import { useNavigate } from "react-router";

import Button from "../Button";

function ActionButtons({ step, questionsLength }) {
  const navigate = useNavigate();
  const isLast = questionsLength - 1 === step;
  return (
    <div>
      {step === 0 || (
        <Button
          type="TERTIARY"
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
            navigate(`/done/`);
          }}
        >
          제출
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </Button>
      )}
    </div>
  );
}
export default ActionButtons;

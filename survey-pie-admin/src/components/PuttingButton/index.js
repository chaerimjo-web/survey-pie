import { Button } from "antd";
import { useSelector } from "react-redux";

import putSurvey from "../../stores/survey/putSurvey";

function FloatingButton() {
  const survey = useSelector((state) => state.survey);
  return (
    <>
      <Button onClick={() => putSurvey(survey)}>저장</Button>
      {/* survey 데이터 useSelect를 이용하여 가져오기 */}
    </>
  );
}
export default FloatingButton;

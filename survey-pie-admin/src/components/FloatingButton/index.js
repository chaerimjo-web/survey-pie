import { Button } from "antd";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

import putSurvey from "../../stores/survey/putSurvey";

function FloatingButton() {
  const survey = useSelector((state) => state.survey.data);
	
  return (
    <FloatingButtonWrapper>
      <Button onClick={() => putSurvey(survey)}>저장</Button>
      {/* survey 데이터 useSelect를 이용하여 가져오기 */}
    </FloatingButtonWrapper>
  );
}

const FloatingButtonWrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  box-shadow: 2px 2px 5px -2px #dddddd;
`;

export default FloatingButton;

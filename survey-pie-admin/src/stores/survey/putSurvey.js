import axios from "axios";

function putSurvey(survey) {
  axios.put(`/survey/${survey.id}`, survey).then("저장이 되었습니다.");
}

export default putSurvey;

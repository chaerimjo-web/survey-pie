import axios from "axios";

function postSurvey(survey) {
  return axios.post("/surveys", survey).then((res) => {
    alert("저장이 되었습니다.");
    return res.data;
  });
}

export default postSurvey;

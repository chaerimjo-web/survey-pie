import axios from "axios";

function postSurvey(survey) {
console.log(survey)
  return axios
    .post("/surveys", { ...survey, createdAt: new Date().getTime() })
    .then((res) => {
      alert("저장이 되었습니다.");

      return res.data;
    });
}

export default postSurvey;

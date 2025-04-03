import mainApi from "./apis/mainApis";

function postAnswers(surveyId, data) {
  return mainApi.post("/answers", { surveyId, data });
}

export default postAnswers;

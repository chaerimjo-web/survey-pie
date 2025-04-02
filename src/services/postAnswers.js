import mainApi from "./apis/mainApis";

function postAnswers(surveyId, data) {
  mainApi.post("/answers", { surveyId, data });
}

export default postAnswers;

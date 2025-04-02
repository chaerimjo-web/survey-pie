import mainApi from "../services/apis/mainApis"

function getSurvey(surveyId) {
  return mainApi.get(`/surveys/${surveyId}`);
}

export default getSurvey;

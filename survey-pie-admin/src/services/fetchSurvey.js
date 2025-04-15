import fetcher from "../libs/fetcher";
import { setError, setLoading, setSurvey } from "../stores/survey/surveySlice";

const fetchSurvey = (surveyId) => (dispatch, getState) => {
  setLoading(true);
  fetcher(`/surveys/${surveyId}`)
    .then((data) => {
      dispatch(setSurvey(data));
    })
    .catch((err) => {
      dispatch(setError(err));
    })
    .finally(() => { //에러가 나든 말든 상관없이 코드를 실행한다. 
      setLoading(false);
    });
};

export default fetchSurvey;

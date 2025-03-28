import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import questionsState from "../../store/questions/atom";

function useCurrentQuestion(){
	const params = useParams();
	const step = parseInt(params.step);
  const questions = useRecoilValue(questionsState);

	return questions[step];
}
export default useCurrentQuestion;
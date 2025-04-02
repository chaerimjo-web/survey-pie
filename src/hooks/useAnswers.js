import { useRecoilValue } from "recoil";

import answersState from "../store/answers/atom";

function useAnswers(){
	return useRecoilValue(answersState);
}

export default useAnswers;
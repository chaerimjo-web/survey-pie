import { useRecoilState } from "recoil";

import answersState from "../store/answers/atom";

function useAnswers(){
	return useRecoilState(answersState);
}

export default useAnswers;
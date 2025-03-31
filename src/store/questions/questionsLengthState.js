import {selector} from "recoil";

import questionsState from "../questions/atom";

const questionsLengthState = selector({
	key: 'questionsLengthState',
	get: ({get})=>{
		const questions = get(questionsState);

		return questions.length;
	}
});


export default questionsLengthState;
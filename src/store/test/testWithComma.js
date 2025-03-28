import {selector} from 'recoil';

import textState from './atom';

const testWithComma = selector({
	key: 'testWithComma',
	get: ({get}) => {
		const text = get(textState);

		return text.join(',');
	}
})

export default testWithComma;
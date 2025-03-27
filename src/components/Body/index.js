import TextInput from "../TextInput";

function Body({type, answer, setAnswer}){
	let TextComponent = null;
	if(type === 'select'){

	}else if(type === 'text'){
		TextComponent = TextInput;
	}else if(type === 'textarea'){

	}
	return(
		<>
			<TextComponent answer={answer} setAnswer={setAnswer} />
		</>
	)
}
export default Body;
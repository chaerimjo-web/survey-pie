import TextInput from "../TextInput";

function Body({type}){
	let TextComponent = null;
	if(type === 'select'){

	}else if(type === 'text'){
		TextComponent = TextInput;
	}else if(type === 'textarea'){

	}
	return(
		<>
			<TextComponent/>
		</>
	)
}
export default Body;
import TextAreaInput from "../TextAreaInput";
import TextInput from "../TextInput";

function Body({ type, answer, setAnswer, options }) {
  let TextComponent = null;
  if (type === "select") {
  } else if (type === "text") {
    TextComponent = TextInput;
  } else if (type === "textarea") {
    TextComponent = TextAreaInput;
  }
  return (
    <>
      <TextComponent answer={answer} setAnswer={setAnswer} options={options} />
    </>
  );
}
export default Body;

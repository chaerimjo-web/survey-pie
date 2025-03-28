import styled from "styled-components";

import SelectInput from "../SelectInput";
import TextAreaInput from "../TextAreaInput";
import TextInput from "../TextInput";

function Body({ type, answer, setAnswer, options }) {
  let TextComponent = null;
  if (type === "select") {
    TextComponent = SelectInput;
  } else if (type === "text") {
    TextComponent = TextInput;
  } else if (type === "textarea") {
    TextComponent = TextAreaInput;
  }
  return (
    <BodyComponent>
      <TextComponent answer={answer} setAnswer={setAnswer} options={options} />
    </BodyComponent>
  );
}

const BodyComponent = styled.div`
  margin: 0 38px;
  flex: 1;
`
export default Body;

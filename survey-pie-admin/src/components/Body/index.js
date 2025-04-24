import SelectInput from "../SelectInput";
import TextAreaInput from "../TextAreaInput";
import Text from "../TextInput";

function Body({ type, options }) {
  let Components;
  if (type === "text") {
    Components = Text;
  } else if (type === "textarea") {
    Components = TextAreaInput;
  } else if (type === "select") {
    Components = SelectInput;
  } else {
    return null;
  }
  return <Components options={options} />;
}
export default Body;

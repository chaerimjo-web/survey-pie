import ActionButtons from "./components/ActionButtons";
import Desc from "./components/Desc";
import ProgressIndicator from "./components/ProgressIndicator";
import TextInput from "./components/TextInput";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <ProgressIndicator/>
      <Title>타이틀입니다.</Title>
      <Desc>설명입니다.</Desc>
      <TextInput/>
      <ActionButtons/>
    </div>
  );
}

export default App;

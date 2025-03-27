import { Route, Routes } from "react-router-dom";

import CompletionPage from "./pages/CompletionPage";
import SurveyPage from "./pages/SurveyPage";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/done" element={<CompletionPage />} />
        <Route path="/survey/:surveyId" element={<SurveyPage />} >
          <Route path=":step" element={<SurveyPage />} />
          {/*상대경로지만 /survey/:surveyId 안에서 이동하게 된다.  */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

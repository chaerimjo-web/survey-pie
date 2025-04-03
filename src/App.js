import { Route, Routes } from "react-router-dom";
import styled from 'styled-components';

import CompletionPage from "./pages/CompletionPage";
import SurveyPage from "./pages/SurveyPage";

function App() {
  return (
    <AppWrapper>
      <Box>
        <Routes>
          <Route path="/done/:surveyId" element={<CompletionPage />} />
          <Route path="/survey/:surveyId" element={<SurveyPage />} >
            <Route path=":step" element={<SurveyPage />} />
          </Route>
        </Routes>
      </Box>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #F5F6F6;
`;

const Box = styled.div`
  background: #ffffff;
  width: 700px;
  min-height: 500px;
  border-radius: 16px;
  padding: 60px;
  box-shadow: 0 2px 10px rgba(0,0,0, 0.07);
  display: flex;
  box-sizing: border-box;
`;

export default App;

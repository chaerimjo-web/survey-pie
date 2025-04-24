import { configureStore } from "@reduxjs/toolkit";

import thunk from "./middleware/thunk";
import selectedQuestionReducer from "./selectedQuestionId/selectedQuestionIdSlice";
import surveyReducer from "./survey/surveySlice";

export default configureStore({
  reducer: {
    survey: surveyReducer,
    selectedQuestionId: selectedQuestionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
});

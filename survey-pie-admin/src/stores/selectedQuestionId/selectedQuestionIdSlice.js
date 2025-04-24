import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const selectedQuestionIdSlice = createSlice({
  name: "surveySlice",
  initialState,
  reducers: {
    //state함수를 직접적으로 조작하는 함수
    setSelectedQuestionId: (state, action) => {
      state.data.title = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedQuestionId } = selectedQuestionIdSlice.actions;

export default selectedQuestionIdSlice.reducer;

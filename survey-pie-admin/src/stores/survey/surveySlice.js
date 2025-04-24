import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  setError: null,
  setLoading: false,
};

export const surveySlice = createSlice({
  name: "surveySlice",
  initialState,
  reducers: {
    //state함수를 직접적으로 조작하는 함수
    setTitle: (state, action) => {
      state.data.title = action.payload;
    },
    addQuestion: (state, action) => {
      const type = action.payload;
      let options = {};
      if(type === 'text' || type === 'textarea'){
        options = {
          max: 20,
          placeholder: "",
        }
      }else if(type === 'select'){
        options ={
          max: 1,
          items: ["가", "나", "다"]
        }
      }

      state.data.questions.push({
        title: "Untitled",
        desc: "",
        type,
        required: false,
        options,
      });
    },
    moveUpQuestion: (state, action) => {
      const index = action.payload;
      const temp = state.data.questions[index];
      state.data.questions[index] = state.data.questions[index - 1];
      state.data.questions[index - 1] = temp;
    },
    moveDownQuestion: (state, action) => {
      const index = action.payload;
      const temp = state.data.questions[index];
      state.data.questions[index] = state.data.questions[index + 1];
      state.data.questions[index + 1] = temp;
    },
    DeleteQuestion: (state, action) => {
      state.data.questions.splice(action.payload, 1);
    },
    setSurvey: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setQuestion: (state, action) => {
      const index = action.payload.index;
      state.data.questions[index] = action.payload.data;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTitle,
  addQuestion,
  moveUpQuestion,
  moveDownQuestion,
  DeleteQuestion,
  setSurvey,
  setLoading,
  setError,
  setQuestion
} = surveySlice.actions;

export default surveySlice.reducer;

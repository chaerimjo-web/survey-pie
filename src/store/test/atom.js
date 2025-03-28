import { atom } from "recoil";

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: ["a", "b", "c"], // default value (aka initial value)
});

export default textState;

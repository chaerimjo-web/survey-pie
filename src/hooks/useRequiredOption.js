import useCurrentQuestion from "./useCurrentQuestion";

function useRequiredOption() {
  const question = useCurrentQuestion();
  return question?.required || false; //required 없는 경우는 false처리
}

export default useRequiredOption;

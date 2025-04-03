import styled from "styled-components";

function TextInput({ answer = "", setAnswer, options }) {
  return (
    <div>
      <Input
        type="text"
        value={answer || ""}
        onChange={(e) => {
          setAnswer(e.target.value);
        }}
        placeholder={options.placeholder}
        {...(options?.max && { maxLength: options?.max })}
        //맥스가 언디파인이아닌 경우에는 뒤에것을 실행
        //언디파인이면 아예 없는 문장을 취급한다.
        // {...(undefined && {maxLength: 1})} -> 언디파인드 되어서 maxLength 없음
        // maxLength={options?.max}
      />
    </div>
  );
}

const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #e0e0e0;
  padding: 12px 18px;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  box-sizing: boder-box;
  resize: none;
  width: 100%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export default TextInput;

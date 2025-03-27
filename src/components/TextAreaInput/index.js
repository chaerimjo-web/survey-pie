import styled from 'styled-components';

function TextAreaInput({ answer, setAnswer, options }) {
  return (
    <div>
      <TextArea
        type="text"
        value={answer || ""}
        onChange={(e) => {
          setAnswer(e.target.value);
        }}
        placeholder={options.placeholder}
      />
    </div>
  );
}

const TextArea = styled.textarea`
  border-radius: 5px;
  border: 1px solid #E0E0E0;
  box-sizing: boder-box;
  resize: none;
  font-size: 18px;
  padding: 12px 18px;
  font-weight: 400;
  line-height: 21px;
  height: 196px;
`;

export default TextAreaInput;

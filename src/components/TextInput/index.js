import styled from 'styled-components';

function TextInput({ answer, setAnswer, options }) {
  return (
    <div>
      <Input
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

const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #E0E0E0;
  padding: 12px 18px;
  font-size: 18px;
  font-weight: 300;
  line-height: 21px;
  box-sizing: boder-box;
  resize: none;
`;

export default TextInput;

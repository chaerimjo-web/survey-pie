import styled from 'styled-components';

function TextInput({ answer='', setAnswer, options }) {
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
  font-weight: 400;
  line-height: 21px;
  box-sizing: boder-box;
  resize: none;
  width: 100%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export default TextInput;

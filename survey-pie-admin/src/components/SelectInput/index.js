import { Radio } from "antd";
import { Space } from "antd";

function SelectInput({ options }) {
  return (
    <Space direction="vertical">
      {options.items && options.items.map((item) => (
        <Radio>{item}</Radio>
      ))}
    </Space>
  );
}
export default SelectInput;

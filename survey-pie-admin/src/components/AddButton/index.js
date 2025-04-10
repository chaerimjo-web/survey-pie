import { PlusCircleOutlined } from "@ant-design/icons";
import { styled } from "styled-components";

function AddButton() {
  return (
		<ButtonWrapper>
			<PlusCircleOutlined />
		</ButtonWrapper>
	);
}

const ButtonWrapper = styled.div`
	font-size: 2rem;
	text-align: center;
`;

export default AddButton;

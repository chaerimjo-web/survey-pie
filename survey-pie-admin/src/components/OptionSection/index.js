import { styled } from "styled-components";

function OptionSection() {
  return (
		<OptionSectionWrapper>
			<Title>
				문항 옵션
			</Title>
		</OptionSectionWrapper>);
}

const OptionSectionWrapper = styled.div`
	height: 100%;
	border-left: 1px solid #dddddd;
	background: #fff;
`;
const Title = styled.div`
	padding: 10px 0;
	background: #f0f0f0;
	text-align: center;
	font-weight: 500;
	border-bottom: 1px solid #dddddd;
`

export default OptionSection;

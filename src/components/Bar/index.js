import styled from "styled-components";

const Bar = styled.div`
	width: 120px;
	height: 8px;
	border-radius: 16px;
	background: ${(props) => {
    if (props.$status === "pending") {
      return "#E3E2E7";
    } else if (props.$status === "in-progress") {
      return "#6542F1";
    } else if (props.$status === "done") {
      return "#BAA9FF";
    }
  }};
`;

export default Bar;
/*

질문 번호에 따른 색상 변경
질문하지 않은 상태 pending
값 입력중인 상태 in-progress
질문 입력한 상태 done

*/

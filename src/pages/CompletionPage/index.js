import styled from "styled-components";

import congrats from "../../assets/congrats.png";

function CompletionPage() {
  return (
    <CompletionPageWrapper>
      <img src={congrats} alt="" width="209" height="204" />
      <MidText>설문이 완료되었습니다.</MidText>
    </CompletionPageWrapper>
  );
}

const CompletionPageWrapper = styled.div` `;
const MidText = styled.div``;

export default CompletionPage;

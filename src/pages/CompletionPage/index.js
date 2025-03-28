import { useRecoilValue } from "recoil";
import styled from "styled-components";

import testWithComma from "../../store/test/testWithComma";

function CompletionPage() {
  const text = useRecoilValue(testWithComma);

  return <CompletionPageWrapper>{text}</CompletionPageWrapper>;
}

const CompletionPageWrapper = styled.div``;

export default CompletionPage;

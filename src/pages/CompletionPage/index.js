import axios from "axios";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import testWithComma from "../../store/test/testWithComma";

function CompletionPage() {
  const text = useRecoilValue(testWithComma);

  axios.get('http://localhost:3001/surveys').then((res)=>{
    console.log('res', res.data);
  })

  return <CompletionPageWrapper>{text}</CompletionPageWrapper>;
}

const CompletionPageWrapper = styled.div``;

export default CompletionPage;

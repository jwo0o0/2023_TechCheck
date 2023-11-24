import styled from "styled-components";
import Link from "next/link";
import { BottomBtn, BtnContainer } from "@components/common/BottomBtn";

export const ResultPage = () => {
  return (
    <ResultPageContainer>
      <div>결과 입니다!</div>
      <BtnContainer>
        <Link href="/">
          <BottomBtn type="light">다시 풀기</BottomBtn>
        </Link>
      </BtnContainer>
    </ResultPageContainer>
  );
};

const ResultPageContainer = styled.div`
  position: relative;
`;

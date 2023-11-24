import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

import { BottomBtn, BtnContainer } from "../common/BottomBtn";
import { Progressbar } from "../common/Progressbar";

export const QuizPage = () => {
  const router = useRouter();
  const currentId = Number(router.query.id);

  return (
    <QuizPageContainer>
      <ProgressbarContainer>
        <Progressbar step={currentId} />
      </ProgressbarContainer>
      <div>quiz: {router.query.id}</div>
      <BtnContainer>
        <BottomBtn>
          {currentId === 10 ? (
            <Link href="/result">결과 보기</Link>
          ) : (
            <Link href={`/quiz/${currentId + 1}`}>다음 문제</Link>
          )}
        </BottomBtn>
      </BtnContainer>
    </QuizPageContainer>
  );
};

const QuizPageContainer = styled.div`
  position: relative;
`;

const ProgressbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 5vh;
`;

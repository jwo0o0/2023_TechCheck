import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

import { BottomBtn, BtnContainer } from "../common/BottomBtn";

export const QuizPage = () => {
  const router = useRouter();

  const currentId = Number(router.query.id);
  const nextId = currentId + 1;
  console.log(nextId);

  return (
    <QuizPageContainer>
      <div>quiz: {router.query.id}</div>
      <BtnContainer>
        <BottomBtn>
          {currentId === 10 ? (
            <Link href="/result">결과 보기</Link>
          ) : (
            <Link href={`/quiz/${nextId}`}>다음 문제</Link>
          )}
        </BottomBtn>
      </BtnContainer>
    </QuizPageContainer>
  );
};

const QuizPageContainer = styled.div`
  position: relative;
`;

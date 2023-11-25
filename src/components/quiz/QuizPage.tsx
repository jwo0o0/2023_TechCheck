import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";

import { BottomBtn, BtnContainer } from "../common/BottomBtn";
import { Progressbar } from "../common/Progressbar";
import { Question } from "./Question";
import { Explanation } from "./Explanation";
import { Answers } from "./Answers";

const answers = ["적응형 AI", "진화형 AI", "반응형 AI", "생성형 AI"];

export const QuizPage = () => {
  const router = useRouter();
  const currentId = Number(router.query.id);
  const [selectedAnswer, setSelectedAnswer] = useState<number>(0);

  useEffect(() => {
    setSelectedAnswer(0);
  }, []);

  const handleClickNextQuestion = () => {
    setSelectedAnswer(0);
  };

  return (
    <QuizPageContainer>
      <ProgressbarContainer>
        <Progressbar step={currentId || 0} />
      </ProgressbarContainer>
      <Question question="뫄뫄뫄뫄 기업이 뭐뭐뭐를 했는데 이러이러한 기술의 이름은 무엇일까요?" />
      <Explanation explanation="설명설명 참고참고 이러이러한 일이 있었음 설명설명 참고참고 이러이러한 일이 있었음 설명설명 참고참고 이러이러한 일이 있었음" />
      <Answers
        id={currentId}
        answers={answers}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
      />
      <BtnContainer>
        {currentId === 12 ? (
          <Link href="/result">
            <BottomBtn disabled={selectedAnswer === 0 ? true : false}>
              결과 보기
            </BottomBtn>
          </Link>
        ) : (
          <Link href={`/quiz/${currentId + 1}`}>
            <BottomBtn
              handleClick={handleClickNextQuestion}
              disabled={selectedAnswer === 0 ? true : false}
            >
              다음 문제
            </BottomBtn>
          </Link>
        )}
      </BtnContainer>
    </QuizPageContainer>
  );
};

const QuizPageContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgressbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 5vh;
`;

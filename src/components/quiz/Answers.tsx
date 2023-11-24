import styled from "styled-components";

interface AnswersProps {
  id: number;
  answers: string[];
  selectedAnswer: number;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<number>>;
}
export const Answers = ({
  id,
  answers,
  selectedAnswer,
  setSelectedAnswer,
}: AnswersProps) => {
  const handleClickAnswer = (idx: number) => {
    setSelectedAnswer(idx);
  };
  return (
    <AnswersContainer>
      {answers.map((el, idx) => {
        return (
          <Answer
            key={idx}
            onClick={() => {
              handleClickAnswer(idx + 1);
            }}
            className={selectedAnswer === idx + 1 ? "selected" : ""}
          >{`${idx + 1}. ${el}`}</Answer>
        );
      })}
    </AnswersContainer>
  );
};

const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Answer = styled.button`
  width: 320px;
  height: 45px;
  margin: 6px 0;
  padding: 0 15px;
  border-radius: 8px;

  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;
  color: #525463;
  border: 1px solid #525463;

  text-align: start;

  &:hover {
    cursor: pointer;
  }

  &.selected {
    color: white;
    background-color: #583dff;
    border: none;
  }
  transition: background-color 0.1s ease;
`;

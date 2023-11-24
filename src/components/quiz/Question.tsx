import styled from "styled-components";

interface QuestionProps {
  question: string;
}
export const Question = ({ question }: QuestionProps) => {
  return (
    <QuestionContainer>
      <QText>Q.</QText>
      <QuestionText>{question}</QuestionText>
    </QuestionContainer>
  );
};

const QuestionContainer = styled.div`
  width: 300px;
  height: 120px;

  display: flex;
  align-items: center;
`;

const QText = styled.div`
  color: #583dff;
  height: 40px;
  font-size: 18px;
  margin-right: 4px;

  font-family: "Pretendard";
  font-weight: 600;
`;

const QuestionText = styled.div`
  color: #2b2d36;
  font-size: 18px;
  line-height: 20px;
  font-family: "Pretendard";
  font-weight: 600;
`;

import styled from "styled-components";

interface ScoreProps {
  score?: number;
}
export const Score = ({ score }: ScoreProps) => {
  return (
    <ScoreContainer>
      <div className="info">채점 결과</div>
      <div className="result">
        <span>{score || 0}</span> /12 문제를 맞추셨습니다!
      </div>
    </ScoreContainer>
  );
};

const ScoreContainer = styled.div`
  width: 100%;
  margin-top: 5vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Pretendard";
  font-weight: 700;

  div.info {
    color: #583dff;
    font-size: 18px;

    height: 32px;
  }
  div.result {
    display: flex;
    align-items: center;
    color: #3e404c;
    font-size: 20px;
    span {
      color: #583dff;
      font-size: 36px;
    }
  }
`;

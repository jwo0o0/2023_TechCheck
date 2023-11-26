import styled from "styled-components";
import Image from "next/image";
import correctImg from "@images/correct.svg";
import wrongImg from "@images/wrong.svg";

const answers = [
  "생성형 AI",
  "클라우드 네이티브",
  "슈퍼 앱",
  "블록체인",
  "메타버스",
  "자율주행",
  "엣지 컴퓨팅",
  "openAI",
  "웹",
  "엔비디아",
];
const correct = [true, true, false, true, true, false, false, true, true, true];
export const AnswerList = () => {
  return (
    <AnswerListContainer>
      <Header>정답</Header>
      {answers.map((el, idx) => {
        return (
          <Answer key={idx}>
            <div className="number">{`${idx + 1}.`}</div>
            {el}
            {correct[idx] === true ? (
              <Image src={correctImg} width={30} alt="정답" />
            ) : (
              <Image src={wrongImg} width={30} alt="정답" />
            )}
          </Answer>
        );
      })}
    </AnswerListContainer>
  );
};

const AnswerListContainer = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid red;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 80%;
  padding: 10px 0;
  margin-top: 15px;
  margin-bottom: 10px;
  border-bottom: 2px solid #583dff;

  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 600;
  color: #583dff;
`;

const Answer = styled.div`
  width: 80%;
  margin: 8px 0;
  padding-left: 8px;

  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  color: #3e404c;

  position: relative;

  display: flex;

  div.number {
    width: 26px;
  }

  img {
    position: absolute;
    top: -3px;
    left: 0;
  }
`;

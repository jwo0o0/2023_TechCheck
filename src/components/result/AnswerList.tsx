import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

import correctImg from "@images/correct.svg";
import wrongImg from "@images/wrong.svg";
import arrowDownIcon from "@images/arrow_down.svg";
import arrowUpIcon from "@images/arrow_up.svg";

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
  const [selected, setSelected] = useState<number>(0);
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const handleDetailBtn = (id: number) => {
    setSelected(id);
    setShowDetail(true);
  };

  const handleClickCloseBtn = () => {
    setShowDetail(false);
    setSelected(0);
  };

  return (
    <AnswerListContainer>
      <Header>정답</Header>
      {answers.map((el, idx) => {
        return (
          <>
            <Answer key={idx}>
              <div className="number">{`${idx + 1}.`}</div>
              <button
                className={
                  "answer " + `${selected === idx + 1 ? "selected" : ""}`
                }
                onClick={() => {
                  handleDetailBtn(idx + 1);
                }}
              >
                {el}
              </button>
              {correct[idx] === true ? (
                <Image src={correctImg} width={30} alt="정답" />
              ) : (
                <Image src={wrongImg} width={30} alt="정답" />
              )}
              {selected === idx + 1 ? (
                <ShowDetailButton>
                  <Image
                    src={arrowUpIcon}
                    alt="접기"
                    onClick={handleClickCloseBtn}
                  />
                </ShowDetailButton>
              ) : (
                <ShowDetailButton
                  onClick={() => {
                    handleDetailBtn(idx + 1);
                  }}
                >
                  <Image src={arrowDownIcon} alt="자세히 보기" />
                </ShowDetailButton>
              )}
            </Answer>
            {selected === idx + 1 && showDetail ? (
              <Explain>
                <span>자율주행</span>은 차량이 운전자의 개입 없이 스스로 주행을
                수행하는 기술을 의미합니다. 이 기술은 센서, 카메라, 레이더, 리다
                및 컴퓨터 비전과 같은 다양한 센싱 기술을 활용하여 주변 환경을
                감지하고 이해하는 데 의존합니다.
              </Explain>
            ) : null}
          </>
        );
      })}
    </AnswerListContainer>
  );
};

const AnswerListContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30px;
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
  padding-left: 4px;

  position: relative;

  display: flex;
  align-items: center;

  button.answer {
    background-color: transparent;
    border: none;
    padding: 0;

    font-family: "Pretendard";
    font-size: 18px;
    font-weight: 600;
    color: #3e404c;
    &.selected {
      color: #583dff;
    }
  }

  div.number {
    width: 26px;
    margin-right: 4px;
    text-align: center;

    font-family: "Pretendard";
    font-size: 18px;
    font-weight: 600;
    color: #3e404c;
  }

  img {
    position: absolute;
    top: -3px;
    left: 0;
  }
`;

const ShowDetailButton = styled.button`
  position: absolute;
  right: 0;
  background-color: transparent;
  border: 0;
  padding: 0;

  width: 16px;
  height: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Explain = styled.div`
  width: 80%;

  padding: 12px 0;
  margin-top: 6px;
  border-top: 1px solid #525463;

  font-family: "Pretendard";
  font-size: 12px;
  line-height: 16px;
  color: #525463;

  span {
    font-weight: 600;
  }
`;

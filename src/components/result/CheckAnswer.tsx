import styled from "styled-components";
import Image from "next/image";
import scrolldownImg from "@images/scrolldown.svg";
import { useEffect } from "react";

export const CheckAnswer = () => {
  const handleClickBtn = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", handleClickBtn);
    };

    watchScroll();

    return () => {
      window.removeEventListener("scroll", handleClickBtn);
    };
  }, []);

  return (
    <CheckAnswerContainer onClick={handleClickBtn}>
      <div>정답 확인하기</div>
      <Image src={scrolldownImg} alt="스크롤" />
    </CheckAnswerContainer>
  );
};

const CheckAnswerContainer = styled.button`
  padding-bottom: 180px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: transparent;
  border: none;

  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 600;
  color: #583dff;
  div {
    margin-bottom: 6px;
  }
`;

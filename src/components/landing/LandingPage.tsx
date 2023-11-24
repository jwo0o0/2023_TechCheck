import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import LandingImg from "@images/landing.webp";
import { BottomBtn, BtnContainer } from "../common/BottomBtn";

export default function LandingPage() {
  return (
    <LandingPageContainer>
      <Image src={LandingImg} alt="landing" priority />
      <BtnContainer>
        <Link href="/quiz/1">
          <BottomBtn>시작하기</BottomBtn>
        </Link>
      </BtnContainer>
      <Information>
        <div>*이 테스트는 재미를 위해 제작되었습니다.</div>
        <div>잘못된 정보에 대한 정정 요청은 아래 메일로 부탁드립니다.</div>
        <div className="email">jwo0o0358@gmail.com</div>
      </Information>
    </LandingPageContainer>
  );
}

const LandingPageContainer = styled.div`
  padding-top: 5vh;
  //padding-bottom: 200px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    position: relative !important;
  }
`;

const Information = styled.div`
  width: 100%;
  height: 120px;
  padding-bottom: 80px;
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 10px;
  line-height: 13px;
  color: #858899;
  .email {
    color: #7e68ff;
  }

  display: none;
`;

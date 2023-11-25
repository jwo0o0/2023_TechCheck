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

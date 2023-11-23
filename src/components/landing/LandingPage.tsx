import styled from "styled-components";
import Image from "next/image";
import LandingImg from "@images/landing.webp";

export default function LandingPage() {
  return (
    <>
      <div>안녕하세용</div>
      <Image src={LandingImg} alt="landing" sizes="100%" />
    </>
  );
}

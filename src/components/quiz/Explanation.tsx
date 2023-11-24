import styled from "styled-components";
import Image from "next/image";
import starImg from "@images/star.svg";

interface ExplanationProps {
  explanation: string;
}
export const Explanation = ({ explanation }: ExplanationProps) => {
  return (
    <Container>
      <Image src={starImg} width={24} alt="star" />
      <Text>{explanation}</Text>
    </Container>
  );
};

const Container = styled.div`
  width: 280px;
  height: 140px;
  margin-bottom: 10px;

  display: flex;
  align-items: center;

  position: relative;

  img {
    position: absolute;
    top: 10px;
    left: -16px;
  }
`;

const Text = styled.div`
  font-family: "Pretendard";
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #525463;
`;

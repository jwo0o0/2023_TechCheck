import styled from "styled-components";
import Image from "next/image";
import starImg from "@images/star.svg";

interface ExplanationProps {
  explanation: string;
}
export const Explanation = ({ explanation }: ExplanationProps) => {
  return (
    <Container>
      <Image src={starImg} width={28} alt="star" />
      <Text>{explanation}</Text>
    </Container>
  );
};

const Container = styled.div`
  width: 280px;
  height: 120px;
  margin-bottom: 10px;

  display: flex;
  align-items: center;

  position: relative;

  img {
    position: absolute;
    top: 5px;
    left: -18px;
  }
`;

const Text = styled.div`
  font-family: "Pretendard";
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #525463;
`;

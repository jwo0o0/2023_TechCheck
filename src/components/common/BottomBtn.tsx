import styled from "styled-components";

interface BottomBtnProps {
  content: string;
  handleClick?: () => void;
}
export const BottomBtn = ({ content, handleClick }: BottomBtnProps) => {
  return <Button onClick={handleClick}>{content}</Button>;
};

const Button = styled.button`
  width: 300px;
  height: 40px;
  border-radius: 6px;

  color: white;
  background-color: #583dff;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;

  user-select: none;

  transition: background-color 0.1s ease;
  z-index: 999;
`;

//버튼을 화면 하단에 fixed로 고정
export const BtnContainer = styled.div`
  width: 100%;
  max-width: 460px;
  height: 80px;

  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 998;
`;

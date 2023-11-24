import { ReactNode } from "react";
import styled from "styled-components";

interface BottomBtnProps {
  handleClick?: () => void;
  children?: ReactNode;
  type?: "normal" | "light";
}
export const BottomBtn = ({ children, handleClick, type }: BottomBtnProps) => {
  return (
    <Button onClick={handleClick} className={type}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  width: 320px;
  height: 40px;
  padding: 0;
  border-radius: 8px;

  a {
    color: white;
  }
  color: white;
  background-color: #583dff;

  font-size: 15px;
  line-height: 40px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;

  user-select: none;

  transition: background-color 0.1s ease;
  z-index: 999;

  &:hover {
    background-color: #7e68ff;
    cursor: pointer;
  }

  a {
    width: 320px;
    height: 40px;
  }

  &.light {
    color: #583dff;
    background-color: #dfdaff;
    a {
      color: #583dff;
    }
    &:hover {
      background-color: #c7beff;
    }
  }
`;

//버튼을 화면 하단에 fixed로 고정
export const BtnContainer = styled.div`
  width: 100%;
  max-width: 460px;
  margin-bottom: 5vh;

  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 998;
`;

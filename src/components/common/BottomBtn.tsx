import { ReactNode } from "react";
import styled from "styled-components";

interface BottomBtnProps {
  handleClick?: () => void;
  children?: ReactNode;
  type?: "normal" | "light";
  disabled?: boolean;
}
export const BottomBtn = ({
  children,
  handleClick,
  type,
  disabled,
}: BottomBtnProps) => {
  return (
    <Button
      onClick={handleClick}
      className={type}
      disabled={disabled ? true : false}
    >
      {children}
    </Button>
  );
};

export const Button = styled.button`
  width: 320px;
  height: 45px;
  padding: 0;
  border-radius: 8px;

  color: white;
  background-color: #583dff;

  font-family: "Pretendard";
  font-weight: 600;
  font-size: 15px;
  line-height: 40px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;

  user-select: none;

  transition: background-color 0.1s ease;
  z-index: 999;

  &:active {
    background-color: #7e68ff;
  }
  &:hover {
    cursor: pointer;
  }

  &.light {
    color: #583dff;
    background-color: #dfdaff;
    &:active {
      background-color: #c7beff;
    }
    &:hover {
      cursor: pointer;
    }
  }
  &:disabled {
    background-color: #e1e1e8;
    color: #525463;
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

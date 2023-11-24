import styled from "styled-components";

interface ProgressbarProps {
  step: number;
}
export const Progressbar = ({ step }: ProgressbarProps) => {
  return (
    <Background>
      <ProgressLine step={step} />
    </Background>
  );
};

const Background = styled.div`
  width: 280px;
  height: 8px;
  border-radius: 8px;

  background-color: #dfdaff;
`;

const ProgressLine = styled.div<{ step: number }>`
  width: ${(props) => props.step * 28}px;
  height: 8px;
  border-radius: 8px;

  background-color: #583dff;
  transition: 0.3s;
`;

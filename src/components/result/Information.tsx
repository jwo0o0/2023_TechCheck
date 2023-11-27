import styled from "styled-components";
import Image from "next/image";
import emailIcon from "@images/email_icon.svg";

export const Information = () => {
  return (
    <InformationContainer>
      <div>*이 테스트는 재미를 위해 제작되었습니다.</div>
      <div>잘못된 정보에 대한 정정 요청은 아래 메일로 부탁드립니다.</div>
      <div className="email">
        <Image src={emailIcon} alt="email" width={14} />
        jwo0o0358@gmail.com
      </div>
    </InformationContainer>
  );
};

const InformationContainer = styled.div`
  width: 100%;
  padding-bottom: 160px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Pretendard";
  font-size: 11px;
  line-height: 16px;
  color: #858899;
  .email {
    color: #7e68ff;
    display: flex;
    align-items: center;
    img {
      margin-right: 4px;
    }
  }

  /* position: absolute;
  bottom: 0; */
`;

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import linkIcon from "@images/link_icon.svg";
import { BottomBtn, Button } from "@components/common/BottomBtn";
import { Toast } from "../common/Toast";
import { Information } from "./Information";
import { Score } from "./Score";
import { CheckAnswer } from "./CheckAnswer";
import { AnswerList } from "./AnswerList";

export const ResultPage = () => {
  const [toast, setToast] = useState<boolean>(false);

  const handleClickCopyBtn = () => {
    setToast(true);
    navigator.clipboard.writeText("https://2023-tech-check.vercel.app");
  };

  return (
    <ResultPageContainer>
      <Content>
        <Score score={8} />
        <CheckAnswer />
      </Content>

      <AnswerContent>
        <AnswerList />
        <Information />
      </AnswerContent>

      <BtnsContainer>
        <Button onClick={handleClickCopyBtn} className="copylink">
          <Image
            src={linkIcon}
            alt="공유하기"
            width={16}
            style={{ marginRight: "5px" }}
          />
          공유하기
        </Button>
        <Link href="/">
          <BottomBtn type="light">다시 풀기</BottomBtn>
        </Link>
        {toast && (
          <Toast message="주소가 복사되었습니다!" setToast={setToast} />
        )}
      </BtnsContainer>
    </ResultPageContainer>
  );
};

const ResultPageContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BtnsContainer = styled.div`
  max-width: 460px;
  height: 110px;
  margin-bottom: 5vh;

  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Content = styled.div`
  border: 1px solid green;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const AnswerContent = styled.div`
  width: 100%;
  height: 100vh;
`;

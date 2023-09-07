import React from "react";
import { styled } from "styled-components";
import PreviewEmployContent from "./../../components/PreviewEmployContent";
import EmployContent from "../../components/EmployContent";
import Button from "./../../components/Button";

function EmployerDetail() {
  return (
    <EmployDetailWrapper>
      <header>
        <button>뒤로가기 버튼</button>
      </header>
      <PreviewEmployContent />
      <EmployContent />
      <div className="BtnWrapper">
        <Button text="수정하기" />
        <Button text="삭제하기" />
      </div>
    </EmployDetailWrapper>
  );
}

export default EmployerDetail;

const EmployDetailWrapper = styled.div`
  width: 375px;
  height: 812px;
  background-color: ${({ theme }) => theme.color.white};
  user-select: none;
`;

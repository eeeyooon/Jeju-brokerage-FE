import React from "react";
import { styled } from "styled-components";
import PreviewEmployContent from "../../components/PreviewEmployContent";
import EmployContent from "../../components/EmployContent";
import BigButton from "../../components/BigButton";

function EmployeeDetail() {
  return (
    <EmployDetailWrapper>
      <h1>(구직자)구인 공고 자세히 보기</h1>
      <header>
        <button>뒤로가기</button>
      </header>
      <PreviewEmployContent />
      <EmployContent />
      <BigButton text="전화하기" />
    </EmployDetailWrapper>
  );
}

export default EmployeeDetail;

const EmployDetailWrapper = styled.div`
  width: 375px;
  height: 812px;
  background-color: ${({ theme }) => theme.color.white};
  user-select: none;
`;

import React from "react";
import { styled } from "styled-components";

function EmployWrite() {
  return (
    <EmployWriteWrapper>
      <h1>구인 공고 글 작성 페이지</h1>
    </EmployWriteWrapper>
  );
}

export default EmployWrite;

const EmployWriteWrapper = styled.div`
  width: 375px;
  height: 812px;
  background-color: ${({ theme }) => theme.color.white};
  user-select: none;
`;

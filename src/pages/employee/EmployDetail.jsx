import React from "react";
import { styled } from "styled-components";

function EmployDetail() {
  return (
    <EmployDetailWrapper>
      <h1>(구직자)구인 공고 자세히 보기</h1>
    </EmployDetailWrapper>
  );
}

export default EmployDetail;

const EmployDetailWrapper = styled.div`
  width: 375px;
  height: 812px;
  background-color: ${({ theme }) => theme.color.white};
  user-select: none;
`;

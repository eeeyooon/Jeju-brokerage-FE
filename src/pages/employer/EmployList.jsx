import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function EmployList() {
  const navigate = useNavigate();

  return (
    <EmployListWrapper>
      <h1>작성한 구인공고 목록 페이지</h1>
      <button onClick={() => navigate("/employ-detail")}>
        구인공고 자세히 보기
      </button>
    </EmployListWrapper>
  );
}

export default EmployList;

const EmployListWrapper = styled.div`
  width: 375px;
  height: 812px;
  background-color: ${({ theme }) => theme.color.white};
  user-select: none;
`;

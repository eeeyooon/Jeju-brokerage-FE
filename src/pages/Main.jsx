import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Main() {
  const navigate = useNavigate();
  return (
    <MainWrapper>
      <h1>메인 페이지</h1>
      <NavigateBtn onClick={() => navigate("/login")}>로그인 하기</NavigateBtn>
      <NavigateBtn onClick={() => navigate("/employ-write")}>
        구인 공고 글 작성
      </NavigateBtn>
      <button onClick={() => navigate("/employ-list")}>
        작성한 구인공고 목록 조회
      </button>
      <button onClick={() => navigate("/employ-detail")}>
        구인 공고 자세히보기
      </button>
    </MainWrapper>
  );
}

export default Main;

const MainWrapper = styled.div`
  width: 375px;
  height: 812px;
  background-color: ${({ theme }) => theme.color.white};
  user-select: none;
`;

const NavigateBtn = styled.button`
  padding: 10px;
  border: 1px solid black;
  font-size: ${({ theme }) => theme.fontSize.body1};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary_light};
`;

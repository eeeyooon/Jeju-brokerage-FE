import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import PreviewEmploy from "../components/PreviewEmploy";

function Main() {
  const navigate = useNavigate();
  return (
    <MainWrapper>
      <h1>메인 페이지</h1>
      <NavBtnWrapper>
        <NavigateBtn onClick={() => navigate("/login")}>
          로그인 하기
        </NavigateBtn>
        <NavigateBtn onClick={() => navigate("/employ-write")}>
          구인 공고 글 작성
        </NavigateBtn>
        <NavigateBtn onClick={() => navigate("/employ-list")}>
          작성한 구인공고 목록 조회
        </NavigateBtn>
        <NavigateBtn onClick={() => navigate("/employ-detail")}>
          구인 공고 자세히보기
        </NavigateBtn>
      </NavBtnWrapper>
      <PreviewEmploy />
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
  margin: 10px;
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary_light};
`;

const NavBtnWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

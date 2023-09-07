import React from "react";
import { styled } from "styled-components";
import PreviewEmployBox from "../components/PreviewEmployBox";

function Main() {
  return (
    <MainWrapper>
      <h1>메인페이지</h1>
      <PreviewEmployBox />
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

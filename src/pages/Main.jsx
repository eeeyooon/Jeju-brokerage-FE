import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Main() {
  const navigate = useNavigate();
  return <MainWrapper>단기 장기 지도 모달창</MainWrapper>;
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

import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Login() {
  const naviagte = useNavigate();

  return (
    <LoginWrapper>
      <h1>로그인 페이지</h1>
      <NavigateBtn onClick={() => naviagte("/main")}>메인으로 이동</NavigateBtn>
    </LoginWrapper>
  );
}

export default Login;

const LoginWrapper = styled.div`
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

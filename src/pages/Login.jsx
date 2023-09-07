import React from "react";
import { styled } from "styled-components";

function Login() {
  return (
    <LoginWrapper>
      <h1>일자리 있수꽝?</h1>
      <p>설명글설명글설명글설명글</p>
      <button>카카오톡 로그인</button>
      <p>팀명</p>
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

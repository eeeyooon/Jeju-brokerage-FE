import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const naviagte = useNavigate();

  return (
    <div>
      <h1>로그인 페이지</h1>
      <button onClick={() => naviagte("/main")}>메인으로 이동</button>
    </div>
  );
}

export default Login;

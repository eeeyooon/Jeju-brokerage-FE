import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { styled } from "styled-components";

const handleUserUpdate = async (useremail, username) => {
  try {
    const response = await axios.post(
      `/member/login`,
      {
        username: username,
        email: useremail,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    localStorage.setItem("memberId", response.data.userId);
    localStorage.setItem("userType", response.data.userType);
  } catch (error) {
    console.error(error);
  }
};

function Login() {
  const navigate = useNavigate();
  /// 카카오 로그인
  useEffect(() => {
    // Kakao SDK 스크립트 로드
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Kakao SDK 초기화 및 카카오 로그인 함수 정의
      window.Kakao.init("7d977bbb023eb44bf6f671574518ac82");

      // 카카오 로그인 이벤트 핸들러
      const kakaoLogin = () => {
        window.Kakao.Auth.login({
          scope: "profile_nickname, account_email, gender",
          success: function (authObj) {
            console.log(authObj);
            window.Kakao.API.request({
              url: "/v2/user/me",
              success: (res) => {
                const kakao_account = res.kakao_account;
                localStorage.setItem("email", kakao_account.email);
                localStorage.setItem(
                  "username",
                  kakao_account.profile.nickname
                );

                handleUserUpdate(
                  kakao_account.email,
                  kakao_account.profile.nickname
                );

                navigate("/main");
              },
            });
          },
        });
      };

      // 로그인 버튼 클릭 이벤트 설정
      const kakaoLoginButton = document.getElementById("kakao-login-button");
      if (kakaoLoginButton) {
        kakaoLoginButton.addEventListener("click", kakaoLogin);
      }

      // 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
      return () => {
        if (kakaoLoginButton) {
          kakaoLoginButton.removeEventListener("click", kakaoLogin);
        }
      };
    };
  }, []);

  return (
    <LoginWrapper>
      <h1>일자리 있수꽝?</h1>
      <p>설명글설명글설명글설명글</p>
      <button id="kakao-login-button">카카오톡 로그인</button>
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

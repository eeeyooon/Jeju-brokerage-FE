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
      <ServiceGuideWrapper>
        <ServieGuide>
          제주 농어업자와 외국인근로자를 연결하는 새로운 중개 서비스
        </ServieGuide>
        <img
          alt="일있수꽝?"
          src={process.env.PUBLIC_URL + "/assets/login_logo.svg"}
        />
      </ServiceGuideWrapper>
      <KakaoBtn id="kakao-login-button">
        <img
          alt="카카오 로고"
          src={process.env.PUBLIC_URL + "/assets/kakao_logo.svg"}
        />
        카카오톡 로그인
      </KakaoBtn>
    </LoginWrapper>
  );
}

export default Login;

const LoginWrapper = styled.div`
  width: 375px;
  height: 812px;
  background-color: ${({ theme }) => theme.color.white};
  user-select: none;
  background-image: url("/assets/onboarding_image.svg");
`;

const ServiceGuideWrapper = styled.div`
  padding-top: 92px;
  padding-left: 26px;
`;

const ServieGuide = styled.p`
  width: 206px;
  height: 44px;
  color: #606060;
  font-size: ${({ theme }) => theme.fontSize.body2};
  line-height: 22px;
  margin-bottom: 10px;
`;

const KakaoBtn = styled.button`
  width: 290px;
  height: 48px;
  border-radius: 8px;
  background: none;
  background-color: #ffe400;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 500px;
  margin-left: 44px;
  font-size: ${({ theme }) => theme.fontSize.body2};

  img {
    margin-right: 8px;
  }
`;

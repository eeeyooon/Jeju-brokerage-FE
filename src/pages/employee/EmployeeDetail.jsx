import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import PreviewEmployContent from "../../components/PreviewEmployContent";
import EmployContent from "../../components/EmployContent";
import { useLocation, useNavigate } from "react-router-dom";

function EmployeeDetail() {
  const location = useLocation();
  const { clickedBusiness } = location.state;
  const navigate = useNavigate();

  return (
    <EmployDetailWrapper>
      <header>
        <button
          onClick={() => {
            navigate("/main");
          }}
        >
          <img
            alt="뒤로가기 버튼"
            src={process.env.PUBLIC_URL + "/assets/arrow_back.svg"}
          />
        </button>
      </header>
      <PreviewEmployContent clickedData={clickedBusiness} />
      <EmployContent clickedBusiness={clickedBusiness} />
      <CallBtnWrapper>
        <CallBtn>전화하기</CallBtn>
      </CallBtnWrapper>
    </EmployDetailWrapper>
  );
}

export default EmployeeDetail;

const EmployDetailWrapper = styled.div`
  width: 375px;
  height: 812px;
  background-color: ${({ theme }) => theme.color.white};
  user-select: none;

  header {
    height: 52px;
    width: 375px;
    display: flex;
    align-items: center;
    padding-left: 24px;
    margin-bottom: 20px;
  }
`;

const CallBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const CallBtn = styled.button`
  width: 335px;
  height: 48px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.primary_normal};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.body1};
`;

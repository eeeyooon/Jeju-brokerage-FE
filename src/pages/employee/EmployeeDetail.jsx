import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import PreviewEmployContent from "../../components/PreviewEmployContent";
import EmployContent from "../../components/EmployContent";
import BigButton from "../../components/BigButton";
import { useLocation } from "react-router-dom";

function EmployeeDetail() {
  const location = useLocation();
  const clickedBusiness = location.state;
  console.log(clickedBusiness);

  return (
    <EmployDetailWrapper>
      <h1>(구직자)구인 공고 자세히 보기</h1>
      <header>
        <button>뒤로가기</button>
      </header>
      <PreviewEmployContent clickedData={clickedBusiness} />
      <EmployContent clickedBusiness={clickedBusiness} />
      <BigButton text="전화하기" />
    </EmployDetailWrapper>
  );
}

export default EmployeeDetail;

const EmployDetailWrapper = styled.div`
  width: 375px;
  height: 812px;
  background-color: ${({ theme }) => theme.color.white};
  user-select: none;
`;

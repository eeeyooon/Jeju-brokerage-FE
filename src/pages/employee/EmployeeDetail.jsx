import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import PreviewEmployContent from "../../components/PreviewEmployContent";
import EmployContent from "../../components/EmployContent";
import BigButton from "../../components/BigButton";
import { useLocation } from "react-router-dom";

function EmployeeDetail() {
  const [businesse, setBusinesse] = useState();
  const location = useLocation();
  const businessId = location.state;
  console.log(businessId);

  useEffect(() => {
    const response = axios
      .get(
        `https://user-app.krampoline.com/k77c33daa3a48a/business/${businessId}`
      )
      .then((response) => {
        setBusinesse(response.data);

        console.log(businesse);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [businessId]);

  return (
    <EmployDetailWrapper>
      <h1>(구직자)구인 공고 자세히 보기</h1>
      <header>
        <button>뒤로가기</button>
      </header>
      <PreviewEmployContent />
      <EmployContent />
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

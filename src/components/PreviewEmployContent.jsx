import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";

//business id를 받아와서 porps 처리하기
function PreviewEmployContent({ businessId }) {
  const [business, setBusiness] = useState();

  // useEffect(() => {
  //   const response = axios
  //     .get(
  //       `https://user-app.krampoline.com/k77c33daa3a48a/business/${businessId}`
  //     )
  //     .then((response) => {
  //       setBusinesse(response.data);

  //       console.log(business);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [businessId]);

  return (
    <PreviewEmployContentWrapper>
      <InfoWrapper>
        <ContentInfo>
          <h1>귤나와라 뚝딱</h1>
          <InfoText className="name">김복자</InfoText>
          <InfoText className="address">
            제주 서귀포시 성산읍 동류앙로 38(성산읍 고성리) 38-1번길 301호
          </InfoText>
        </ContentInfo>
        <BuinsessTypeBox>
          <img
            alt="업종 아이콘"
            src={process.env.PUBLIC_URL + "/assets/Farm.svg"}
          />
        </BuinsessTypeBox>
      </InfoWrapper>
      <PeriodText>한달 이상</PeriodText>
    </PreviewEmployContentWrapper>
  );
}

export default PreviewEmployContent;

const PreviewEmployContentWrapper = styled.div`
  width: 335px;
  height: 121px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: ${({ theme }) => theme.color.white};
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentInfo = styled.div`
  width: 278px;
  height: 92px;

  h1 {
    height: 28px;
    font-size: ${({ theme }) => theme.fontSize.title};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

const BuinsessTypeBox = styled.div`
  width: 52px;
  height: 72px;
  text-align: center;
  line-height: 72px;
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.color.grayscale_66};

  &.name {
    height: 20px;
    width: 233px;
  }

  &.address {
    width: 233px;
    height: 40px;
    line-height: 20px;
  }
`;

const PeriodText = styled.div`
  width: 58px;
  height: 25px;
  color: ${({ theme }) => theme.color.over_month};
  font-size: ${({ theme }) => theme.fontSize.caption2};
  background-color: ${({ theme }) => theme.color.grayscale_EE};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  border-radius: 5px;
`;

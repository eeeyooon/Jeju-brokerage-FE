import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

function PreviewEmployContent({ clickedData }) {
  const [totalText, setTotalText] = useState("");

  useEffect(() => {
    setTotalText(handleTotalWork(clickedData.totalWorkDate));
  }, []);

  const handleTotalWork = (day) => {
    if (day <= 7) {
      return "1주 이내";
    } else if (day > 7 && day <= 14) {
      return "2주 이내";
    } else if (day > 14 && day <= 31) {
      return "한 달 이내";
    } else {
      return "한 달 이상";
    }
  };

  return (
    <PreviewEmployContentWrapper>
      <InfoWrapper>
        <ContentInfo>
          <h1>{clickedData.businessName}</h1>
          <InfoText className="address">{clickedData.address}</InfoText>
        </ContentInfo>
        <BuinsessTypeBox>
          <img
            alt="업종 아이콘"
            src={
              process.env.PUBLIC_URL +
              (clickedData.businessType === "농업"
                ? "/assets/Farm.svg"
                : clickedData.businessType === "어업"
                ? "/assets/Fishing.svg"
                : "/assets/Etc.svg")
            }
          />
        </BuinsessTypeBox>
      </InfoWrapper>
      <PeriodText $totalText={totalText}>{totalText}</PeriodText>
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
  height: 82px;

  h1 {
    height: 28px;
    font-size: ${({ theme }) => theme.fontSize.title};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-bottom: 5px;
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
  color: ${({ theme, $totalText }) =>
    $totalText === "1주 이내"
      ? theme.color.one_week
      : $totalText === "2주 이내"
      ? theme.color.two_week
      : $totalText === "한 달 이내"
      ? theme.color.under_month
      : theme.color.over_month};
  font-size: ${({ theme }) => theme.fontSize.caption2};
  background-color: ${({ theme }) => theme.color.grayscale_EE};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  border-radius: 5px;
`;

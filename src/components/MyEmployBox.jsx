import React from "react";
import { styled } from "styled-components";
import SmallButton from "./SmallButton";

function MyEmployBox() {
  return (
    <MyEmployBoxWrapper>
      <BoxContent>
        <ContentInfo>
          <BaseInfo>
            <h1>귤 나와라 뚝딱</h1>
            <InfoText className="name">김복자</InfoText>
            <InfoText className="address">
              제주 서귀포시 성산읍 동류앙로 38(성산읍 고성리) 38-1번길 301호
            </InfoText>
          </BaseInfo>
          <BusinessTypeBox>농업</BusinessTypeBox>
        </ContentInfo>
        <BtnWrapper>
          <StatusText>현재 구인중이에요</StatusText>
          <SmallButton text="구인마감" />
        </BtnWrapper>
      </BoxContent>
    </MyEmployBoxWrapper>
  );
}
export default MyEmployBox;

const MyEmployBoxWrapper = styled.div`
  width: 335px;
  height: 172px;
  border-radius: 8px;
  box-shadow: 0px 1px 7px 0px rgba(125, 125, 125, 0.25);
  margin-right: 20px;
  margin-left: 20px;
`;

const BoxContent = styled.div`
  width: 303px;
  height: 140px;
  margin: 16px;
  padding-top: 16px;

  margin-bottom: 16px;

  h1 {
    height: 28px;
    font-size: ${({ theme }) => theme.fontSize.title};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

const ContentInfo = styled.div`
  width: 300px;
  height: 92px;
  display: flex;
  justify-content: space-between;
`;

const BaseInfo = styled.div`
  width: 233px;
  height: 92px;
`;

const InfoText = styled.p`
  padding-top: 2px;
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
const BusinessTypeBox = styled.div`
  width: 52px;
  height: 72px;
  text-align: center;
  line-height: 72px;
`;

const BtnWrapper = styled.div`
  width: 303px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

const StatusText = styled.p`
  color: ${({ theme }) => theme.color.primary_normal};
  font-size: ${({ theme }) => theme.fontSize.body2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

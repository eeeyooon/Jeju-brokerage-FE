import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import SmallButton from "./SmallButton";
import axios from "axios";

function MyEmployBox() {
  const [businessData, setBusinessData] = useState([]);

  useEffect(() => {
    axios
      .get("https://user-app.krampoline.com/k77c33daa3a48a/business/member/1")
      .then((response) => {
        setBusinessData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const updateRecruitState = (businessId) => {
    axios
      .put(
        `https://user-app.krampoline.com/k77c33daa3a48a/business/${businessId}`
      )
      .then((response) => {
        setBusinessData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {businessData.map((business) => (
        <MyEmployBoxWrapper key={business.businessId}>
          <BoxContent>
            <ContentInfo>
              <BaseInfo>
                <h1>{business.businessName}</h1>
                <InfoText className="name">{business.businessName}</InfoText>
                <InfoText className="address">{business.address}</InfoText>
              </BaseInfo>
              <BusinessTypeBox>
                <img
                  alt="업종 아이콘"
                  src={process.env.PUBLIC_URL + "/assets/Farm.svg"}
                />
              </BusinessTypeBox>
            </ContentInfo>
            <BtnWrapper>
              <StatusText>{business.recruitState}</StatusText>
              <StatusBtn>구인마감</StatusBtn>
            </BtnWrapper>
          </BoxContent>
        </MyEmployBoxWrapper>
      ))}
    </div>
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

const StatusBtn = styled.button`
  height: 36px;
  padding: 8px 19px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.primary_normal};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.caption1};
`;

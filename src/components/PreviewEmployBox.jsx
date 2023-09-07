import React, { useState } from "react";
import PreviewEmployContent from "./PreviewEmployContent";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

function PreviewEmployBox({ clickedBusiness }) {
  const [clickedData, setClickedData] = useState(clickedBusiness);
  const navigate = useNavigate();
  const isPreview = true;

  return (
    <div>
      <PreviewEmployContent isPreview={isPreview} clickedData={clickedData} />
      <BtnWrapper>
        <DetailBtn
          onClick={() => {
            navigate("/employee-detail", {
              state: { clickedBusiness: clickedData },
            });
          }}
        >
          상세보기
        </DetailBtn>
        <CallBtn>전화하기</CallBtn>
      </BtnWrapper>
    </div>
  );
}

export default PreviewEmployBox;

const BtnWrapper = styled.div`
  margin-top: 20px;
  width: 335px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
`;

const DetailBtn = styled.button`
  width: 164px;
  height: 48px;
  padding: 10px 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.primary_normal};
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primary_normal};
  font-size: ${({ theme }) => theme.fontSize.caption1};
`;

const CallBtn = styled.button`
  width: 164px;
  height: 48px;
  padding: 8px 19px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.primary_normal};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.caption1};
`;

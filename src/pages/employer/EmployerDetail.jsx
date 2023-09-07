import React from "react";
import { styled } from "styled-components";
import PreviewEmployContent from "./../../components/PreviewEmployContent";
import EmployContent from "../../components/EmployContent";
import Button from "../../components/BigButton";

function EmployerDetail() {
  return (
    <EmployDetailWrapper>
      <header>
        <button>
          <img
            alt="뒤로가기 버튼"
            src={process.env.PUBLIC_URL + "/assets/arrow_back.svg"}
          />
        </button>
      </header>
      <PreviewEmployContent />
      <MarginBox>1</MarginBox>
      <EmployContent />
      <BtnWrapper>
        <EditBtn>수정하기</EditBtn>
        <DeleteBtn>삭제하기</DeleteBtn>
      </BtnWrapper>
    </EmployDetailWrapper>
  );
}

export default EmployerDetail;

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
    margin-bottom: 12px;
  }
`;

const MarginBox = styled.div`
  height: 60px;
  color: ${({ theme }) => theme.color.white};
`;

const BtnWrapper = styled.div`
  margin-top: 20px;
  width: 335px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
`;

const EditBtn = styled.button`
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

const DeleteBtn = styled.button`
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

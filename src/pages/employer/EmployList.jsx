import React from "react";
import { styled } from "styled-components";
import MyEmployBox from "./../../components/MyEmployBox";

function EmployList() {
  return (
    <EmployListWrapper>
      <header>
        <button>
          <img
            alt="뒤로가기 버튼"
            src={process.env.PUBLIC_URL + "/assets/arrow_back.svg"}
          />
        </button>
      </header>
      <ListHeaderText>
        김복자님의<p>구인 목록이에요</p>
      </ListHeaderText>
      <div className="EmployBoxWrapper">
        <MyEmployBox />
        <MyEmployBox />
        <MyEmployBox />
      </div>
    </EmployListWrapper>
  );
}

export default EmployList;

const EmployListWrapper = styled.div`
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

const ListHeaderText = styled.h1`
  width: 143px;
  height: 56px;
  color: ${({ theme }) => theme.color.grayscale_1c};
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-left: 20px;
  line-height: 28px;
`;

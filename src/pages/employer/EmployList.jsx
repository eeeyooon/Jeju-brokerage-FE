import React from "react";
import { styled } from "styled-components";
import MyEmployBox from "./../../components/MyEmployBox";

function EmployList() {
  return (
    <EmployListWrapper>
      <header>
        <button>뒤로가기버튼</button>
        <h1>
          김복자님의<p>구인 목록이에요</p>
        </h1>
      </header>
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
`;

import React from "react";
import { styled } from "styled-components";
import MyEmployBox from "./../../components/MyEmployBox";
import { useNavigate } from "react-router-dom";

function EmployList() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("username");

  return (
    <EmployListWrapper>
      <header>
        <button
          onClick={() => {
            navigate("/main");
          }}
        >
          <img
            alt="뒤로가기 버튼"
            src={process.env.PUBLIC_URL + "/assets/arrow_back.svg"}
          />
        </button>
      </header>
      <ListHeaderText>
        {userName}님의<p>구인 목록이에요</p>
      </ListHeaderText>
      <div className="EmployBoxWrapper">
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

  padding-bottom: 30px;

  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

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

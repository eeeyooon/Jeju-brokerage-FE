import React from "react";
import { styled } from "styled-components";
import Button from "../../components/Button";

function EmployWrite() {
  return (
    <EmployWriteWrapper>
      <header>
        <button>뒤로가기</button>
        <h1>
          일꾼들에게 보여줄
          <p>정보를 입력해주세요</p>
        </h1>
      </header>
      <div>
        <div className="BusinessNameWrapper">
          <label htmlFor="BusinessNameInput">사업장 명</label>
          <input
            type="text"
            id="BusinessNameInput"
            className="BusinessName"
            placeholder="2글자 이상 적어주세요."
          />
        </div>
        <div className="BusinessNumberWrapper">
          <label htmlFor="BusinessNumberInput">사업자등록번호</label>
          <input
            type="text"
            id="BusinenssNumberInput"
            className="BusinenssNumber"
            placeholder="2글자 이상 적어주세요."
          />
        </div>
        <div className="addressSerach">우편주소검색</div>
        <p>업종</p>
        <div className="businessTypeWrapper">
          <div>농업</div>
          <div>어업</div>
          <div>기타</div>
        </div>
        <div className="WorkDate">
          <label htmlFor="WorkStartDateInput">근무 시작 날짜</label>
          <input
            type="text"
            id="WorkStartDateInput"
            className="WorkStartDate"
            placeholder="YYYY-MM-DD"
          />
          <label htmlFor="WorkFinishDateInput">근무 종료 날짜</label>
          <input
            type="text"
            id="WorkFinishDateInput"
            className="WorkFinishDate"
            placeholder="YYYY-MM-DD"
          />
        </div>
        <div className="WorkTime">
          <label htmlFor="WorkStartTimeInput">근무 시작 시간</label>
          <input type="text" id="WorkStartTimeInput" placeholder="24:00" />
          <label htmlFor="WorkFinishTimeInput">근무 종료 시간</label>
          <input type="text" id="WorkFinishTimeInput" placeholder="24:00" />
        </div>
        <div className="salaryWrapper">
          <label htmlFor="salaryInput">임금</label>
          <div>
            <select name="salaryType" id="salaryType">
              <option value="시급" selected>
                시급
              </option>
              <option value="일급">일급</option>
              <option value="월급">월급</option>
              <option value="건당">건당</option>
            </select>
          </div>
          <input type="text" id="salaryInput" placeholder="000,000원" />
        </div>
        <label htmlFor="businessDetailInput">상세 내용</label>
        <input
          type="text"
          name="businessDetailInput"
          id="businessDetailInput"
          placeholder="15글자 이상 적어주세요."
        />
      </div>
      <Button text="버튼텍스트" />
    </EmployWriteWrapper>
  );
}

export default EmployWrite;

const EmployWriteWrapper = styled.div`
  width: 375px;
  height: 812px;
  background-color: ${({ theme }) => theme.color.white};
  user-select: none;
`;

import React, { useState } from "react";
import { styled } from "styled-components";
import BigButton from "../../components/BigButton";
import DaumPost from "../../components/DaumPost";

function EmployWrite() {
  const [businessName, setBusinessName] = useState("");
  const [businessNumber, setBusinessNumber] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("01012345678");
  const [businessType, setBusinessType] = useState("농업");
  const [workStartDate, setWorkStartDate] = useState("");
  const [workFinishDate, setWorkFinishDate] = useState("");
  const [workStartTime, setWorkStartTime] = useState("");
  const [workFinishTime, setWorkFinishTime] = useState("");
  const [salaryType, setSalaryType] = useState("시급");
  const [salary, setSalary] = useState(0);
  const [businessDetail, setBusinessDetail] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const recruitState = "모집중";

  const data = {
    businessName,
    businessNumber,
    address,
    phoneNumber,
    businessType,
    workStartDate,
    workFinishDate,
    workStartTime,
    workFinishTime,
    salaryType,
    salary,
    businessDetail,
    latitude,
    longitude,
    recruitState,
  };

  // console.log(address);
  // console.log(data);
  // DaumPost 컴포넌트에서 받은 fullAddress를 처리하는 함수
  const handleAddressChange = (newAddress) => {
    setAddress(newAddress);
  };
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
            onChange={(event) => {
              setBusinessName(event.target.value);
            }}
          />
        </div>
        <div className="BusinessNumberWrapper">
          <label htmlFor="BusinessNumberInput">사업자등록번호</label>
          <input
            type="text"
            id="BusinessNumberInput"
            className="BusinenssNumber"
            placeholder="2글자 이상 적어주세요."
            onChange={(event) => {
              setBusinessNumber(event.target.value);
            }}
          />
        </div>
        <div className="addressSerach">우편주소검색</div>
        <p>{address}</p>
        <DaumPost handleAddressChange={handleAddressChange} />
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
            onChange={(event) => {
              setWorkStartDate(event.target.value);
            }}
          />
          <label htmlFor="WorkFinishDateInput">근무 종료 날짜</label>
          <input
            type="text"
            id="WorkFinishDateInput"
            className="WorkFinishDate"
            placeholder="YYYY-MM-DD"
            onChange={(event) => {
              setWorkFinishDate(event.target.value);
            }}
          />
        </div>
        <div className="WorkTime">
          <label htmlFor="WorkStartTimeInput">근무 시작 시간</label>
          <input
            type="text"
            id="WorkStartTimeInput"
            placeholder="24:00"
            onChange={(event) => {
              setWorkStartTime(event.target.value);
            }}
          />
          <label htmlFor="WorkFinishTimeInput">근무 종료 시간</label>
          <input
            type="text"
            id="WorkFinishTimeInput"
            placeholder="24:00"
            onChange={(event) => {
              setWorkFinishTime(event.target.value);
            }}
          />
        </div>
        <div className="salaryWrapper">
          <label htmlFor="salaryInput">임금</label>
          <div>
            <select name="salaryType" id="salaryType">
              <option value="시급" defaultValue>
                시급
              </option>
              <option value="일급">일급</option>
              <option value="월급">월급</option>
              <option value="건당">건당</option>
            </select>
          </div>
          <input
            type="text"
            id="salaryInput"
            placeholder="000,000원"
            onChange={(event) => {
              setSalary(event.target.value);
            }}
          />
        </div>
        <label htmlFor="businessDetailInput">상세 내용</label>
        <input
          type="text"
          name="businessDetailInput"
          id="businessDetailInput"
          placeholder="15글자 이상 적어주세요."
          onChange={(event) => {
            setBusinessDetail(event.target.value);
          }}
        />
      </div>
      <BigButton text="버튼텍스트" />
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

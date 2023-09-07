import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import BigButton from "../../components/BigButton";
import DaumPost from "../../components/DaumPost";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EmployWrite() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [businessNumber, setBusinessNumber] = useState("");
  const [address, setAddress] = useState("도로명 주소 검색");
  const [phoneNumber, setPhoneNumber] = useState("");
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
  const userId = localStorage.getItem("memberId");
  const data = {
    userId,
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dapi.kakao.com/v2/local/search/address.json",
          {
            headers: {
              Authorization: `KakaoAK f7774b37f25f92a00c923157aa73cd38`,
            },
            params: {
              query: address,
            },
          }
        );
        setLatitude(response.data.documents[0].x);
        setLongitude(response.data.documents[0].y);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [address]);

  // DaumPost 컴포넌트에서 받은 fullAddress를 처리하는 함수
  const handleAddressChange = (newAddress) => {
    setAddress(newAddress);
  };

  const handleSubmit = async () => {
    console.log(data);

    try {
      const response = await axios.post(
        `https://user-app.krampoline.com/k77c33daa3a48a/business`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <EmployWriteWrapper>
      {isOpen && <ModalBackground onClick={() => setIsOpen(false)} />}
      <header>
        <button>
          <img
            alt="뒤로가기 버튼"
            src={process.env.PUBLIC_URL + "/assets/arrow_back.svg"}
          />
        </button>
      </header>
      <WriteHeaderText>
        일꾼들에게 보여줄
        <p>정보를 입력해주세요</p>
      </WriteHeaderText>
      <EmployForm>
        <BusinessNameWrapper>
          <label htmlFor="BusinessNameInput">사업장 명</label>
          <FormInput
            type="text"
            id="BusinessNameInput"
            placeholder="2글자 이상 적어주세요."
            onChange={(event) => {
              setBusinessName(event.target.value);
            }}
          />
        </BusinessNameWrapper>
        <BusinessNumberWrapper>
          <label htmlFor="BusinessNumberInput">사업자등록번호</label>
          <BtnInputWrapper>
            <BtnInput
              type="text"
              id="BusinessNumberInput"
              className="BusinenssNumber"
              placeholder="2글자 이상 적어주세요."
              onChange={(event) => {
                setBusinessNumber(event.target.value);
              }}
            />
            <BigButton text="검색" />
          </BtnInputWrapper>
        </BusinessNumberWrapper>
        <PhoneNumberWrapper>
          <label htmlFor="PhoneNumberInput">연락처</label>
          <FormInput
            type="tel"
            id="PhoneNumberInput"
            placeholder="010-0000-0000"
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
        </PhoneNumberWrapper>
        <AddressSearchWrapper>
          <AddressText>위치</AddressText>
          <SearchBoxWrapper>
            <SearchBox onClick={() => setIsOpen(true)}>{address}</SearchBox>
            <SearchBtn onClick={() => setIsOpen(true)}>검색</SearchBtn>
          </SearchBoxWrapper>
        </AddressSearchWrapper>
        {isOpen && (
          <>
            <SearchModalWrapper>
              <DaumPost
                handleAddressChange={handleAddressChange}
                setIsOpen={setIsOpen}
              />
            </SearchModalWrapper>
          </>
        )}
        <BusinessTypeWrapper>
          <TypeText>업종</TypeText>
          <TypeBtnWrapper>
            <TypeButton>
              <img
                alt="농업"
                src={process.env.PUBLIC_URL + "/assets/Farm.svg"}
              />
            </TypeButton>
            <TypeButton>
              <img
                alt="어업"
                src={process.env.PUBLIC_URL + "/assets/Fishing.svg"}
              />
            </TypeButton>
            <TypeButton>
              <img
                alt="기타"
                src={process.env.PUBLIC_URL + "/assets/Etc.svg"}
              />
            </TypeButton>
          </TypeBtnWrapper>
        </BusinessTypeWrapper>
        <WorkDateWrapper>
          <WorkStartDateWrapper>
            <label htmlFor="WorkStartDateInput">근무 시작 일</label>
            <WorkInput
              type="text"
              id="WorkStartDateInput"
              className="WorkStartDate"
              placeholder="YYYY-MM-DD"
              onChange={(event) => {
                setWorkStartDate(event.target.value);
              }}
            />
          </WorkStartDateWrapper>
          <WorkFinishDateWrapper>
            <label htmlFor="WorkFinishDateInput">근무 종료 일</label>
            <WorkInput
              type="text"
              id="WorkFinishDateInput"
              className="WorkFinishDate"
              placeholder="YYYY-MM-DD"
              onChange={(event) => {
                setWorkFinishDate(event.target.value);
              }}
            />
          </WorkFinishDateWrapper>
        </WorkDateWrapper>
        <WorkTimeWrapper>
          <WorkStartTimeWrapper>
            <label htmlFor="WorkStartTimeInput">근무 시작 시간</label>
            <WorkInput
              type="text"
              id="WorkStartTimeInput"
              placeholder="24:00"
              onChange={(event) => {
                setWorkStartTime(event.target.value);
              }}
            />
          </WorkStartTimeWrapper>
          <WorkFinishTimeWrapper>
            <label htmlFor="WorkFinishTimeInput">근무 종료 시간</label>
            <WorkInput
              type="text"
              id="WorkFinishTimeInput"
              placeholder="24:00"
              onChange={(event) => {
                setWorkFinishTime(event.target.value);
              }}
            />
          </WorkFinishTimeWrapper>
        </WorkTimeWrapper>
        <SalaryWrapper>
          <label htmlFor="salaryInput">임금</label>
          <SalaryInputWrapper>
            <SalarySelect name="salaryType" id="salaryType">
              <option value="시급" defaultValue>
                시급
              </option>
              <option value="일급">일급</option>
              <option value="월급">월급</option>
              <option value="건당">건당</option>
            </SalarySelect>
            <FormInput
              type="text"
              id="salaryInput"
              placeholder="000,000원"
              onChange={(event) => {
                setSalary(event.target.value);
              }}
            />
          </SalaryInputWrapper>
        </SalaryWrapper>
        <BusinessDetailWrapper>
          <label htmlFor="businessDetailInput">상세 내용</label>
          <DetailInput
            type="text"
            name="businessDetailInput"
            id="businessDetailInput"
            placeholder="15글자 이상 적어주세요."
            onChange={(event) => {
              setBusinessDetail(event.target.value);
            }}
          />
        </BusinessDetailWrapper>
      </EmployForm>
      <ButtonWrapper>
        <CreateAbleBtn
          onClick={() => {
            handleSubmit();
            navigate("/employ-list");
          }}
        >
          등록하기
        </CreateAbleBtn>
      </ButtonWrapper>
    </EmployWriteWrapper>
  );
}

export default EmployWrite;

const EmployWriteWrapper = styled.div`
  width: 375px;
  height: 812px;
  background-color: ${({ theme }) => theme.color.white};
  user-select: none;

  position: relative;

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

  label {
    color: ${({ theme }) => theme.color.grayscale_66};
    font-size: ${({ theme }) => theme.fontSize.caption};
    margin-bottom: 4px;
  }
`;

const WriteHeaderText = styled.h1`
  width: 161px;
  height: 56px;
  color: ${({ theme }) => theme.color.grayscale_1c};
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-left: 20px;
  line-height: 28px;
  margin-bottom: 16px;
`;

const EmployForm = styled.div`
  width: 335px;
  height: 988px;
  margin-right: 20px;
  margin-left: 20px;
`;

const BusinessNameWrapper = styled.div`
  width: 335px;
  height: 94px;
  display: flex;
  flex-flow: column nowrap;
`;

const FormInput = styled.input`
  height: 48px;
  padding-left: 16px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.grayscale_66};
  outline-color: ${({ theme }) => theme.color.grayscale_66};

  ::placeholder {
    width: 216px;
    height: 20px;
    color: ${({ theme }) => theme.color.grayscale_bd};
    font-size: ${({ theme }) => theme.fontSize.caption1};
    padding-left: 16px;
  }
`;

const SearchBtn = styled.button`
  height: 48px;
  padding: 24px 14px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.primary_normal};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.body1};
`;

const BtnInput = styled.input`
  width: 264px;
  height: 48px;
  border-radius: 5px;
  padding-left: 16px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.grayscale_66};
  outline-color: ${({ theme }) => theme.color.grayscale_66};
  margin-right: 8px;
`;

const SearchBox = styled.div`
  width: 264px;
  height: 48px;
  border-radius: 5px;
  padding-left: 16px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.grayscale_66};
  outline-color: ${({ theme }) => theme.color.grayscale_66};
  margin-right: 8px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.grayscale_66};
`;

const WorkInput = styled.input`
  width: 164px;
  height: 48px;
  border-radius: 5px;
  padding-left: 16px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.grayscale_66};
  outline-color: ${({ theme }) => theme.color.grayscale_66};
  margin-top: 4px;

  ::placeholder {
    width: 216px;
    height: 20px;
    color: ${({ theme }) => theme.color.grayscale_bd};
    font-size: ${({ theme }) => theme.fontSize.caption1};
    padding-left: 16px;
  }
`;

const BtnInputWrapper = styled.div`
  width: 335px;
  height: 92px;
`;

const SearchBoxWrapper = styled.div`
  width: 335px;
  height: 92px;
  display: flex;
`;

const TypeText = styled.p`
  color: ${({ theme }) => theme.color.grayscale_66};
  font-size: ${({ theme }) => theme.fontSize.caption};
  margin-bottom: 4px;
`;

const AddressText = styled.p`
  color: ${({ theme }) => theme.color.grayscale_66};
  font-size: ${({ theme }) => theme.fontSize.caption};
  margin-bottom: 4px;
`;

const TypeBtnWrapper = styled.div`
  height: 92px;
  display: flex;
  justify-content: space-evenly;
`;

const TypeButton = styled.button`
  width: 80px;
  height: 92px;
  border: 5px;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.18);
  margin-top: 4px;
`;

const BusinessNumberWrapper = styled.div`
  width: 335px;
  height: 94px;
  display: flex;
  flex-flow: column nowrap;
`;

const PhoneNumberWrapper = styled.div`
  width: 335px;
  height: 94px;
  display: flex;
  flex-flow: column nowrap;
`;

const AddressSearchWrapper = styled.div`
  width: 335px;
  height: 94px;
  display: flex;
  flex-flow: column nowrap;
`;

const BusinessTypeWrapper = styled.div`
  width: 272px;
  height: 136px;
  display: flex;
  flex-flow: column nowrap;
`;

const WorkDateWrapper = styled.div`
  width: 335px;
  height: 94px;
  display: flex;
`;

const WorkStartDateWrapper = styled.div``;

const WorkFinishDateWrapper = styled.div``;

const WorkStartTimeWrapper = styled.div``;

const WorkFinishTimeWrapper = styled.div``;

const WorkTimeWrapper = styled.div`
  width: 335px;
  height: 94px;
  display: flex;
`;

const SalaryWrapper = styled.div`
  width: 335px;
  height: 94px;
`;

const SalarySelect = styled.select`
  width: 106px;
  height: 48px;
  margin-right: 8px;
  border-radius: 5px;
  text-align: center;
`;

const SalaryInputWrapper = styled.div`
  display: flex;
  margin-top: 4px;
`;

const BusinessDetailWrapper = styled.div`
  width: 335px;
  height: 194px;
  display: flex;
  flex-flow: column nowrap;
`;

const DetailInput = styled.textarea`
  height: 170px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.grayscale_66};
  outline-color: ${({ theme }) => theme.color.grayscale_66};
  padding-bottom: 30px;

  ::placeholder {
    width: 131px;
    height: 20px;
    color: ${({ theme }) => theme.color.grayscale_bd};
    font-size: ${({ theme }) => theme.fontSize.caption1};
  }
`;

const ButtonWrapper = styled.div`
  width: 375px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateAbleBtn = styled.button`
  width: 335px;
  height: 48px;
  border-radius: 8px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary_normal};
  font-size: ${({ theme }) => theme.fontSize.body1};
`;

const CreateDisableBtn = styled.button`
  width: 335px;
  height: 48px;
  border-radius: 8px;
  color: ${({ theme }) => theme.color.grayscale_BD};
  background-color: ${({ theme }) => theme.color.grayscale_EE};
  font-size: ${({ theme }) => theme.fontSize.body1};
`;

const SearchModalWrapper = styled.div`
  width: 375px;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 10;
  transform: translate(0, -50%);
`;

const ModalBackground = styled.div`
  background-color: #a8a8a8;
  position: fixed;
  height: inherit;
  opacity: 0.65;
  width: 375px;
  z-index: 5;
`;

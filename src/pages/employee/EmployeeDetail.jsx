import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import PreviewEmployContent from "../../components/PreviewEmployContent";
import EmployContent from "../../components/EmployContent";
import { useLocation, useNavigate } from "react-router-dom";
import CallModal from "../../components/CallModal";

function EmployeeDetail() {
  const location = useLocation();
  const { clickedBusiness } = location.state;
  const navigate = useNavigate();
  const [openCallModal, setOpenCallModal] = useState(false);

  const handleModal = (modalState) => {
    setOpenCallModal(modalState);
  };

  return (
    <EmployDetailWrapper>
      {openCallModal && (
        <ModalBackground onClick={() => setOpenCallModal(false)} />
      )}
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
      <PreviewEmployContent clickedData={clickedBusiness} />
      <EmployContent clickedBusiness={clickedBusiness} />
      <CallBtnWrapper>
        <CallBtn
          onClick={() => {
            setOpenCallModal(true);
          }}
        >
          전화하기
        </CallBtn>
      </CallBtnWrapper>
      {openCallModal && (
        <CallModalWrapper>
          <CallModal handleModal={handleModal} />
        </CallModalWrapper>
      )}
    </EmployDetailWrapper>
  );
}

export default EmployeeDetail;

const EmployDetailWrapper = styled.div`
  width: 375px;
  height: 812px;
  background-color: ${({ theme }) => theme.color.white};
  user-select: none;
  position: relative;

  header {
    height: 52px;
    width: 375px;
    display: flex;
    align-items: center;
    padding-left: 24px;
    margin-bottom: 20px;
  }
`;

const CallBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const CallBtn = styled.button`
  width: 335px;
  height: 48px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.primary_normal};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.body1};
`;

const ModalBackground = styled.div`
  background-color: #a8a8a8;
  position: fixed;
  height: inherit;
  opacity: 0.65;
  width: 375px;
  z-index: 100;
`;

const CallModalWrapper = styled.div`
  padding-top: 20px;
  width: 375px;
  height: 229px;
  position: absolute;
  transform: translate(0, 0);
  bottom: 0%;
  left: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

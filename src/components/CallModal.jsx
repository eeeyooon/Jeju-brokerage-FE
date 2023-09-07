import React from "react";
import { styled } from "styled-components";

function CallModal({ handleModal }) {
  return (
    <CallModalWrapper>
      <ModalBtn>
        <img
          alt="통화 아이콘"
          src={process.env.PUBLIC_URL + "/assets/phoneIcon.svg"}
        />
        010-1234-5678
      </ModalBtn>
      <ModalBtn
        onClick={() => {
          handleModal(false);
        }}
      >
        취소
      </ModalBtn>
    </CallModalWrapper>
  );
}

export default CallModal;

const CallModalWrapper = styled.div`
  width: 335px;
  height: 120px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const ModalBtn = styled.button`
  width: 335px;
  height: 56px;
  background-color: ${({ theme }) => theme.color.grayscale_F7};
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: #007aff;

  img {
    margin-right: 8px;
  }
`;

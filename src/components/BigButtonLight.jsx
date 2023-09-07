import React from "react";
import { styled } from "styled-components";

const BigButtonLight = ({ text }) => {
  return <ButtonBox>{text}</ButtonBox>;
};

export default BigButtonLight;

const ButtonBox = styled.button`
  height: 48px;
  padding: 24px 14px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.primary_normal};
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primary_normal};
  font-size: ${({ theme }) => theme.fontSize.body1};
`;

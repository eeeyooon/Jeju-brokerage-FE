import React from "react";
import { styled } from "styled-components";

const SmallButton = ({ text }) => {
  return <ButtonBox>{text}</ButtonBox>;
};

export default SmallButton;

const ButtonBox = styled.button`
  height: 36px;
  padding: 8px 19px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.primary_normal};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.caption1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

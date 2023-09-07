import React from "react";
import { styled } from "styled-components";

const SmallButton_light = ({ text }) => {
  return <ButtonBox>{text}</ButtonBox>;
};

export default SmallButton_light;

const ButtonBox = styled.button`
  height: 36px;
  padding: 10px 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.primary_normal};
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primary_normal};
  font-size: ${({ theme }) => theme.fontSize.caption1};
`;

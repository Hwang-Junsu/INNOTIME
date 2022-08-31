//만능 버튼 만들기
import styled, { css } from "styled-components";
import React from "react";

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  border: 1px solid #eee;
  color: ${({ textColor }) => textColor || "#000"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  height: 48px;
  margin: 8px;

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          width: 100%;
          margin: 8px;
          align-self: center;
          border-radius: 5px;
        `;
      case "medium":
        return css`
          width: 80px;
        `;
      case "logo":
        return css`
          width: 36px;
          height: 36px;
          border: none;
        `;
      case "commentButton":
        return css`
          width: 36px;
          height: 36px;
          border-radius: 10px;
        `;
      default:
        return css`
          width: 120px;
        `;
    }
  }}

  &:hover {
    background-color: ${({ hoverBackgroundColor }) =>
      hoverBackgroundColor || "#fff"};
    color: ${({ hoverTextColor }) => hoverTextColor || "#000"};
    cursor: pointer;
  }
`;

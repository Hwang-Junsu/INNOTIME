//만능 버튼 만들기
import styled, {css} from "styled-components";
import React from "react";

const Button = ({children, ...props}) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  border: 1px solid #eee;
  color: ${(props) => props.textColor || "#000"};
  background-color: ${(props) => props.backgroundColor || "#fff"};
  height: 48px;
  margin: 8px;
  cursor: pointer;

  ${({size}) => {
    switch (size) {
      case "large":
        return css`
          width: 90%;
          margin: 8px;
          align-self: center;
        `;
      case "medium":
        return css`
          width: 80px;
        `;
      case "small":
        return css`
          width: 48px;
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
    background-color: ${(props) => props.hoverBackgroundColor || "#fff"};
    color: ${(props) => props.hoverTextColor || "#000"};
  }
`;

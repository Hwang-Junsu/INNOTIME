//만능 버튼 만들기
import styled from "styled-components";
import React from "react";

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  border: 1px solid #eee;
  background-color: #fff;
  height: 48px;
  font-size: large;
  cursor: pointer;
`;

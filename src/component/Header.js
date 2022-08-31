// 페이지별 공통 header
import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "@material-ui/icons";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <Button size="logo">
        <Home
          fontSize="large"
          onClick={() => {
            navigate("/");
          }}
        />
      </Button>

      <StyledTitle>INNOTIME</StyledTitle>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
`;

const StyledTitle = styled.h2`
  display: flex;
  justify-content: flex-end;
  align-self: center;
  font-weight: bold;
  font-size: 27px;
  margin: 0;
  padding: 0;
`;

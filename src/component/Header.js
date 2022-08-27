// 페이지별 공통 header
import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "@material-ui/icons";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <Home
        fontSize="large"
        onClick={() => {
          navigate("/");
        }}
      />

      <StyledTitle>모두의 투두리스트</StyledTitle>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
  font-size: large;
  margin: 0;
  padding: 0;
`;

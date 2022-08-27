import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <LayoutStyle>
      <Header />
      <main>{children}</main>
    </LayoutStyle>
  );
};

export default Layout;

let LayoutStyle = styled.div`
  margin: 20px;
`;

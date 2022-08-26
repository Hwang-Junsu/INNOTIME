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

let LayoutStyle = styled.div`
  margin: 20px 20px 20px 20px;
`;
export default Layout;

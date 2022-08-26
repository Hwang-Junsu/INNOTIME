import React from "react";
import styled from "styled-components";
import Header from "./Header";

const LayoutStyle = styled.div``;

const Layout = ({children}) => {
  return (
    <LayoutStyle>
      <Header />
      <main>{children}</main>
    </LayoutStyle>
  );
};

export default Layout;

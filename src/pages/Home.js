import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Banner from "../component/Banner";
import HomeBox from "../component/HomeBox";
import styled from "styled-components";

import Layout from "../component/Layout";

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Layout>
        <Banner title="WELCOME TO INNOTIME!" backgroundColor="#ffffff" />
        <HomeBoxWrapper>
          <HomeBox
            onClick={() => {
              navigate("/add");
            }}
            title="ADD POST ➡"
            value="addButton"
          ></HomeBox>
          <HomeBox
            onClick={() => {
              navigate("/todo");
            }}
            title="COMMUNITY   ➡"
            value="todoButton"
          ></HomeBox>
        </HomeBoxWrapper>
      </Layout>
    </motion.div>
  );
};

export default Home;

const HomeBoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 60%;
  margin: auto;
`;

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Banner from "../component/Banner";
import HomeBox from "../component/HomeBox";

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
        <Banner title="무엇을 할까요?" backgroundColor="#ffffff" />
        <HomeBox
          onClick={() => {
            navigate("/add");
          }}
          title="할 일 추가하기 ➡"
        ></HomeBox>
        <HomeBox
          onClick={() => {
            navigate("/todo");
          }}
          title="Todo List   ➡"
        ></HomeBox>
      </Layout>
    </motion.div>
  );
};

export default Home;

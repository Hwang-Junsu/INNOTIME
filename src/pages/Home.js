import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../component/Banner";
import HomeBox from "../component/HomeBox";

import Layout from "../component/Layout";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Banner title="무엇을 할까요?" backgroundColor="#ffffff" />
      <HomeBox
        onClick={() => {
          navigate("/add");
        }}
        title="할 일 추가하기 (새 게시글) ➡"
      ></HomeBox>
      <HomeBox
        onClick={() => {
          navigate("/todo");
        }}
        title="Todo List (게시판 보기) ➡ "
      ></HomeBox>
    </Layout>
  );
};

export default Home;

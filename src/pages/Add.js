// 기록하기 페이지
import React from "react";
import Layout from "../component/Layout";
import Form from "../component/Form";
import Banner from "../component/Banner";

const Add = () => {
  return (
    <Layout>
      <Banner
        title="할 일 추가"
        backgroundColor="#3399ff"
        textColor="#ffffff"
      />
      <Form />
    </Layout>
  );
};

export default Add;

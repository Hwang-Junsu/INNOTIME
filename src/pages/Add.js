// 기록하기 페이지
import React from "react";
import Layout from "../component/Layout";
import Form from "../component/Form";
import Banner from "../component/Banner";
import {motion} from "framer-motion";

const Add = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <Layout>
        <Banner
          title="할 일 추가"
          backgroundColor="#3399ff"
          textColor="#ffffff"
        />
        <Form />
      </Layout>
    </motion.div>
  );
};

export default Add;

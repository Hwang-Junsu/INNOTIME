import React from "react";
import Layout from "../component/Layout";
import ToDos from "../component/ToDos";
import {motion} from "framer-motion";

const ToDoList = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <Layout>
        <ToDos />
      </Layout>
    </motion.div>
  );
};

export default ToDoList;

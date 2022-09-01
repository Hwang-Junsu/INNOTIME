import React from "react";
import Layout from "../component/Layout";
import Posts from "../component/Posts";
import { motion } from "framer-motion";

const Community = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Layout>
        <Posts />
      </Layout>
    </motion.div>
  );
};

export default Community;

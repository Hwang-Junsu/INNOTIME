import React, { useState, useEffect } from "react";
import Layout from "../component/Layout";
import ToDos from "../component/ToDos";

const ToDoList = () => {
  return (
    <Layout>
      <ToDos />
    </Layout>
  );
};

export default ToDoList;

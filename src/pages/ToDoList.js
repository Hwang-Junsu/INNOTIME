import React from "react";
import Layout from "../component/Layout";

import { useSelector } from "react-redux";
const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return <Layout></Layout>;
};

export default ToDoList;

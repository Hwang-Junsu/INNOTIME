import React, { useState, useEffect } from "react";
import Layout from "../component/Layout";
import axios from "axios";
// import { useSelector } from "react-redux";
const ToDoList = () => {
  const [todos, setTodos] = useState(null);
  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");
    setTodos(data);
    console.log(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <Layout>
      <div>
        {todos?.map((todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </div>
    </Layout>
  );
};

export default ToDoList;

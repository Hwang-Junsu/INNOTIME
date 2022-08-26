import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ToDo from "./ToDo";

const ToDos = () => {
  let todo = useSelector((state) => state.todo.todo);

  return (
    <div>
      <h1>내 할일</h1>
      <ListWrapper>
        {todo.map((work) => (
          <ToDo work={work} key={work.id} />
        ))}
      </ListWrapper>
    </div>
  );
};

export default ToDos;

let ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 40px;
`;

let TodoListBox = styled.div`
  display: flex;
  justify-content: space-between;

  width: 90vw;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 5px 10px 5px 20px;
`;

let TodoListBoxBody = styled.div`
  flex-direction: column;
`;

let TodoListBtn = styled.button`
  border: none;
  background-color: white;
  width: 35px;
  height: 35px;
  margin-top: 5px;
  cursor: pointer;
`;

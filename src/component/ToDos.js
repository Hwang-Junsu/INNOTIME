import React from "react";
import {useSelector} from "react-redux";
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

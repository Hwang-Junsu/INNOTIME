import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getTodos } from "../redux/modules/todosSlice";
import ToDo from "./ToDo";

const ToDos = () => {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.todos);

  console.log(todos);
  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <ListTitle>자유게시판</ListTitle>
      <ListWrapper>
        {todos.map((work) => (
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

let ListTitle = styled.h2`
  margin: 35px 0px 35px 0px;
`;

import { ContactsOutlined } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getTodos } from "../redux/modules/slice";
import ToDo from "./ToDo";

const ToDos = () => {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(__getTodos());
  }, []);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>내 할일</h1>
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

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getTodos } from "../redux/modules/todosSlice";
import ToDo from "./ToDo";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const ToDos = () => {
  const navigate = useNavigate();
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

  if (todos.length === 0) {
    return (
      <EmptyPage>
        <h3>앗! 아직 게시글이 없어요.</h3>
        ➡️
        <Button
          size="emptyPageBtn"
          hoverBackgroundColor="#3399ff"
          hoverTextColor="white"
          onClick={() => {
            navigate("/add");
          }}
        >
          새 글 작성하기
        </Button>
      </EmptyPage>
    );
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

let EmptyPage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: #3399ff;
`;

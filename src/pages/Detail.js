// 글 상세 페이지

import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Layout from "../component/Layout";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = useSelector((state) => state.todo.todo);
  const todoList = todo.find((todo) => todo.id === +id);

  return (
    <Layout>
      <DetailLayout>
        <DetailHeader>
          <h2>Id : {todoList.id}</h2>
          <DetailBackBtn
            onClick={() => {
              navigate("/todo");
            }}
          >
            🔙
          </DetailBackBtn>
        </DetailHeader>
        <DetailTitle>{todoList.title}</DetailTitle>
        <p>{todoList.body}</p>
        <DetailEditBtn>수정하기</DetailEditBtn>
      </DetailLayout>
    </Layout>
  );
};

export default Detail;

let DetailLayout = styled.div`
  margin: 20px 20px 20px 20px;
`;

let DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

let DetailTitle = styled.h1`
  padding: 10px 0px 20px 0px;
`;

let DetailBackBtn = styled.h2`
  cursor: pointer;
`;

let DetailEditBtn = styled.button`
  width: 90vw;
  height: 35px;
  position: absolute;
  bottom: 60px;

  background-color: transparent;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

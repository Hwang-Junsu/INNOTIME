// 글 상세 페이지

import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Layout from "../component/Layout";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "../component/Modal";
import { useState } from "react";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = useSelector((state) => state.todo.todo);
  const todoList = todo.find((todo) => todo.id === +id);

  //TODO: 수정하기 버튼 클릭시 모달창 구현
  const [isOpen, setIsOpen] = useState(false);
  const modalIsOpen = () => {
    setIsOpen(true);
    console.log(isOpen);
  };

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
        <DetailEditBtn onClick={modalIsOpen}>수정하기</DetailEditBtn>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
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

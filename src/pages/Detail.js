// 글 상세 페이지
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Layout from "../component/Layout";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "../component/Modal";
import { useState } from "react";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Comments from "../component/Comments";
import { __getTodos } from "../redux/modules/todosSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { todos } = useSelector((state) => state.todos);
  const todoList = todos.find((todo) => todo.id === id);

  useEffect(() => {
    dispatch(__getTodos());
  }, []);

  //DESC: 수정하기 버튼 클릭시 모달창 구현
  const [isOpen, setIsOpen] = useState(false);
  const modalIsOpen = () => {
    setIsOpen(true);
  };

  return (
    <Layout>
      <DetailLayout>
        <DetailHeader>
          <h2>Id : {todoList?.id}</h2>
          <DetailBackBtn
            onClick={() => {
              navigate("/todo");
            }}
          >
            <span className="material-icons">
              <ArrowBack />
            </span>
          </DetailBackBtn>
        </DetailHeader>
        <DetailTitle>{todoList?.title}</DetailTitle>
        <p>{todoList?.body}</p>
        <DetailEditBtn onClick={modalIsOpen}>수정하기</DetailEditBtn>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
      </DetailLayout>
      <Comments />
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

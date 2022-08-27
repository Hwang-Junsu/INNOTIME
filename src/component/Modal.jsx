import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editTodo } from "../redux/modules/slice";

function Modal({ isOpen, setIsOpen }) {
  const closeModal = () => {
    setIsOpen(false);
  };
  const { id } = useParams();
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todo);
  const selectTodo = todo.find((todo) => todo.id === +id);

  const [newBody, setNewBody] = useState(selectTodo.body);

  const editHandler = () => {
    dispatch(editTodo({ id: selectTodo.id, body: newBody }));
    setIsOpen(false);
  };

  return (
    <ModalBack onClick={closeModal}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h1>{selectTodo.title}</h1>
          <h3 onClick={closeModal}>X</h3>
        </ModalHeader>
        <ModalText
          defaultValue={selectTodo.body}
          onChange={(e) => setNewBody(e.target.value)}
        ></ModalText>
        <ModalEditBtn onClick={editHandler}>저장하기</ModalEditBtn>
      </ModalBox>
    </ModalBack>
  );
}

export default Modal;

let ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

let ModalBox = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;

  z-index: 999;

  width: 700px;
  height: 600px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 40px 40px 30px 40px;
`;

let ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

let ModalText = styled.textarea`
  margin-top: 20px;
  border-radius: 5px;
  padding: 20px;
  width: 93%;
  height: 300px;
  font-size: 1.3em;
  border: 1px solid gray;
`;

let ModalEditBtn = styled.button`
  width: 100%;
  height: 35px;
  margin-top: 25px;

  background-color: transparent;
  border: 1px solid gray;
  border-radius: 5px;
`;

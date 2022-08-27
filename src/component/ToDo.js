import React from "react";
import styled from "styled-components";
import { deleteTodo } from "../redux/modules/slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ToDo = ({ work }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteHandler = (event) => {
    event.stopPropagation(); // 삭제 버튼 클릭시 상세페이지에 진입하는 현상 방지
    dispatch(deleteTodo(work.id));
  };

  return (
    <TodoListBox
      onClick={() => {
        navigate(`/todo/${work.id}`);
      }}
    >
      <TodoListBoxBody>
        <h3>{work.title}</h3>
        <TodoWriterP>작성자: {work.writer}</TodoWriterP>
      </TodoListBoxBody>
      <TodoListBtn onClick={deleteHandler}>🗑</TodoListBtn>
    </TodoListBox>
  );
};

export default ToDo;

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

let TodoWriterP = styled.p`
  font-size: 13px;
`;

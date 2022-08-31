import React from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {__deleteTodos} from "../redux/modules/todosSlice";
import Button from "./Button";
import DeleteIcon from "@material-ui/icons/Delete";
const ToDo = ({work}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function deleteHandler(event) {
    event.stopPropagation(); //DESC: 삭제 버튼 클릭시 상세페이지에 진입하는 현상 방지
    dispatch(__deleteTodos(work.id));
  }

  return (
    <TodoListBox
      onClick={() => {
        navigate(`/community/${work.id}`);
      }}
    >
      <TodoListBoxBody>
        <ToDoTitle>{work.title}</ToDoTitle>
        <TodoWriterP>작성자: {work.writer}</TodoWriterP>
      </TodoListBoxBody>
      {/* <Button size="listDeleteBtn" onClick={deleteHandler}>
        🗑
      </Button> */}
      <Button size="listDeleteBtn" onClick={deleteHandler}>
        <DeleteIcon />
      </Button>
    </TodoListBox>
  );
};

export default ToDo;

const ToDoTitle = styled.h3`
  font-family: "LeferiPoint-BlackObliqueA";
`;

let TodoListBox = styled.div`
  display: flex;
  justify-content: space-between;

  width: 90vw;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 4px 0px 5px 20px;

  &:hover {
    border: 2px solid #3399ff;
  }
`;

let TodoListBoxBody = styled.div`
  flex-direction: column;
`;

// let TodoListBtn = styled.button`
//   border: none;
//   background-color: white;
//   width: 35px;
//   height: 35px;
//   margin-top: 5px;
//   cursor: pointer;
// `;

let TodoWriterP = styled.p`
  font-size: 13px;
`;

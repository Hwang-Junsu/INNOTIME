// 할 일 기록하기 form
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { __addTodoThunk, clearTodo } from "../redux/modules/todosSlice";
import nextId from "react-id-generator";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSuccess = useSelector((state) => state.todos.isSuccess);

  const initialTodo = {
    writer: "",
    title: "",
    body: "",
    isDone: false,
  };

  const [todo, setTodo] = useState(initialTodo);

  useEffect(() => {
    if (!isSuccess) return;
    // DESC: 제출 성공하면 todo list 로 이동
    if (isSuccess) navigate("/todo");

    return () => dispatch(clearTodo());
  }, [dispatch, isSuccess, navigate]);

  /** DESC: 입력 값 변화 감지*/
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  /**DESC: 폼 제출했을 때 동작 */
  const onSubmitHandler = (event) => {
    // DESC: 새로고침 방지
    event.preventDefault();

    // DESC: 유효성 검사
    if (
      todo.writer.trim() === "" ||
      todo.title.trim() === "" ||
      todo.body.trim() === ""
    )
      return alert("빈 항목이 존재합니다.");

    //TODO : ID 처리 문제..id 초기화 오류..
    const id = nextId("todo-");

    dispatch(__addTodoThunk({ ...todo, id }));

    //DESC: todo 값 초기화
    setTodo(initialTodo);
  };

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={onSubmitHandler}>
        <StyledInputContainer>
          <StyledLabel>작성자</StyledLabel>
          <Input
            name="writer"
            onChange={onChangeHandler}
            type="text"
            value={todo.writer}
            placeholder="작성자의 이름을 입력해주세요.(5자 이내)"
            maxLength={5}
          />
          <StyledLabel>제목</StyledLabel>
          <Input
            name="title"
            onChange={onChangeHandler}
            type="text"
            value={todo.title}
            placeholder="제목을 입력해주세요.(50자 이내)"
            maxLength={50}
          />
          <StyledLabel>내용</StyledLabel>
          <StyledTextArea
            name="body"
            onChange={onChangeHandler}
            value={todo.body}
            rows="10"
            placeholder="내용을 입력해주세요.(200자 이내)"
            maxLength={200}
          ></StyledTextArea>
        </StyledInputContainer>
        <Button
          size="large"
          hoverBackgroundColor="#3399ff"
          hoverTextColor="#fff"
        >
          추가하기
        </Button>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Form;

const StyledFormContainer = styled.div`
  height: 100%;
  border: 1px solid #eee;
  padding: 8px;
  margin-top: 20px;
  border-radius: 5px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledLabel = styled.label`
  padding: 8px;
  font-size: x-large;
  font-weight: bold;
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`;

const StyledTextArea = styled.textarea`
  padding: 8px;
  margin: 8px;
  border: 1px solid #eee;
  border-radius: 5px;
`;

// 할 일 기록하기 form
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();

  const initialTodo = {
    writer: "",
    title: "",
    body: "",
  };

  const [todo, setTodo] = useState(initialTodo);

  //입력값 변화감지
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  //폼 제출했을 때 동작
  const onSubmitHandler = (event) => {
    //새로고침 방지
    event.preventDefault();

    //유효성 검사
    if (
      todo.writer.trim() === "" ||
      todo.title.trim() === "" ||
      todo.body.trim() === ""
    )
      return alert("빈 항목이 존재합니다.");

    console.log(todo);

    //제출 성공하면 todo list 로 이동
    navigate("/todo");

    //todo 초기화
    setTodo(initialTodo);
  };

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={onSubmitHandler}>
        <StyledInputContainer>
          <StyledLabel>작성자</StyledLabel>
          <StyledInput
            name="writer"
            onChange={onChangeHandler}
            type="text"
            value={todo.writer}
            placeholder="작성자의 이름을 입력해주세요.(5자 이내)"
            maxLength={5}
          ></StyledInput>
          <StyledLabel>제목</StyledLabel>
          <StyledInput
            name="title"
            onChange={onChangeHandler}
            type="text"
            value={todo.title}
            placeholder="제목을 입력해주세요.(50자 이내)"
            maxLength={50}
          ></StyledInput>
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
        <button>추가하기</button>
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
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledLabel = styled.label`
  padding: 8px;
  font-size: x-large;
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`;
const StyledInput = styled.input`
  margin: 0.4rem;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 0 8px 0;
  height: 40px;
`;

const StyledTextArea = styled.textarea`
  padding: 8px;
  margin: 0.4rem;
`;

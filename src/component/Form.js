// 할 일 기록하기 form
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { __addNewPost } from "../redux/modules/todosSlice";
import { v4 as uuid } from "uuid";
import useInput from "../hooks/useInput";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /** DESC: 입력 값 변화 감지 -커스텀 훅(useInput) 사용*/
  const [writer, onChangeWriterHandler] = useInput();
  const [title, onChangeTitleHandler] = useInput();
  const [body, onChangeBodyHandler] = useInput();

  /**DESC: 폼 제출했을 때 동작 */
  const onSubmitHandler = (event) => {
    // DESC: 새로고침 방지
    event.preventDefault();

    // DESC: 유효성 검사
    if (writer.trim() === "" || title.trim() === "" || body.trim() === "")
      return;

    const post = {
      id: uuid().slice(-4),
      writer: writer,
      title: title,
      body: body,
    };

    dispatch(__addNewPost(post));

    navigate("/todo");
  };

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={onSubmitHandler}>
        <StyledInputContainer>
          <StyledInputBox>
            <StyledLabel>작성자</StyledLabel>
            <Input
              name="writer"
              onChange={onChangeWriterHandler}
              type="text"
              value={writer}
              placeholder="이름을 입력해주세요.(5자 이내)"
              maxLength={5}
              width="90%"
            />
          </StyledInputBox>

          <StyledInputBox>
            <StyledLabel>제목</StyledLabel>
            <Input
              name="title"
              onChange={onChangeTitleHandler}
              type="text"
              value={title}
              placeholder="제목을 입력해주세요.(50자 이내)"
              maxLength={50}
              width="90%"
            />
          </StyledInputBox>
          <StyledInputBox>
            <StyledLabel>내용</StyledLabel>
            <StyledTextArea
              name="body"
              onChange={onChangeBodyHandler}
              value={body}
              rows="10"
              placeholder="내용을 입력해주세요.(200자 이내)"
              maxLength={200}
            ></StyledTextArea>
          </StyledInputBox>
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
  width: 5%;
  min-width: 80px;
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInputBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledTextArea = styled.textarea`
  padding: 8px;
  margin: 8px;
  border: 1px solid #eee;
  border-radius: 5px;
  min-width: fit-content;
  width: 90%;
`;

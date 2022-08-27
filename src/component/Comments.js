import React from "react";
import styled from "styled-components";
import Comment from "./Comment";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addComment} from "../redux/modules/slice";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const Comments = () => {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.comment);
  const {id} = useParams();
  const [currentEdit, setCurrentEdit] = React.useState(null);
  const [editMode, setEditMode] = React.useState(false);
  const [writer, setWriter] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [up, setUp] = React.useState(false);

  const reset = () => {
    setWriter("");
    setComment("");
  };
  const onEditMode = (id) => {
    setCurrentEdit(id);
    setEditMode(!editMode);
  };

  const onChange = (event) => {
    if (event.target.name === "writer") {
      setWriter(event.target.value);
    } else if (event.target.name === "comment") {
      setComment(event.target.value);
    }
  };

  const posting = (event) => {
    event.preventDefault();
    dispatch(
      addComment({
        id: Date.now(),
        todoId: id,
        writer: writer,
        body: comment,
        date: Date.now(),
      })
    );
    reset();
  };

  const onClick = () => {
    setUp(!up);
  };

  return (
    <Wrapper isUp={up}>
      <HeaderButton onClick={onClick}>
        {up ? "눌러서 댓글 내리기" : "눌러서 댓글 올리기"}
      </HeaderButton>
      <Form>
        <input
          id="writerInput"
          onChange={onChange}
          name="writer"
          value={writer}
          placeholder="이름 (5자 이내)"
          type="text"
          maxLength={5}
          required
        />
        <input
          id="commentInput"
          onChange={onChange}
          name="comment"
          value={comment}
          placeholder="댓글을 추가하세요(100자 이내)"
          type="text"
          maxLength={100}
          required
        />
        <button onClick={posting}>
          <AddCircleOutlineIcon />
        </button>
      </Form>
      <CommentList>
        {info.map((comment) => {
          return comment.todoId === id ? (
            editMode ? (
              comment.id === currentEdit ? (
                <Comment
                  key={comment.id}
                  writer={comment.writer}
                  body={comment.body}
                  id={comment.id}
                  onEditMode={onEditMode}
                  disabled={false}
                />
              ) : (
                <Comment
                  key={comment.id}
                  writer={comment.writer}
                  body={comment.body}
                  id={comment.id}
                  onEditMode={onEditMode}
                  disabled={true}
                />
              )
            ) : (
              <Comment
                key={comment.id}
                writer={comment.writer}
                body={comment.body}
                id={comment.id}
                onEditMode={onEditMode}
                disabled={false}
              />
            )
          ) : null;
        })}
      </CommentList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: ${(props) => (props.isUp ? 400 : 50)}px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  transition: height 400ms ease-in-out 0s;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 12px;
  width: 100%;
  padding: 0px 12px;

  input {
    box-sizing: border-box;
    height: 46px;
    width: 100%;
    outline: none;
    border-radius: 8px;
    padding: 0px 12px;
    font-size: 14px;
    border: 1px solid rgb(238, 238, 238);
  }
  #writerInput {
    width: 8%;
  }
  #commentInput {
    width: 82%;
  }
  button {
    height: 40px;
    width: 5%;
    border-radius: 5px;
    border: 1px solid gray;
    background-color: white;
  }
`;

const CommentList = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;
const HeaderButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0px 12px;
  border-top: 1px solid gray;
`;

export default Comments;

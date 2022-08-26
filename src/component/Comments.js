import React from "react";
import styled from "styled-components";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../redux/modules/slice";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const Comments = () => {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.comment);

  const [writer, setWriter] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [up, setUp] = React.useState(false);
  const reset = () => {
    setWriter("");
    setComment("");
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
  const { id } = useParams();
  const onClick = () => {
    let isUp = up;
    setUp(!isUp);
    console.log(up);
  };

  return (
    <Wrapper>
      <HeaderButton onClick={onClick}>눌러서 댓글 올리기</HeaderButton>
      <Form>
        <input
          id="writerInput"
          onChange={onChange}
          name="writer"
          value={writer}
          placeholder="이름 (5자 이내)"
          type="text"
        />
        <input
          id="commentInput"
          onChange={onChange}
          name="comment"
          value={comment}
          placeholder="댓글을 추가하세요(100자 이내)"
          type="text"
        />
        <button onClick={posting}>
          <AddCircleOutlineIcon />
        </button>
      </Form>
      <CommentList isUp={up}>
        {info.map((comment) => {
          return comment.todoId === id ? (
            <Comment
              key={comment.id}
              writer={comment.writer}
              body={comment.body}
              id={comment.id}
            />
          ) : null;
        })}
      </CommentList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: aliceblue;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40vh;
`;
const Form = styled.form`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  input {
    height: 40px;
    border: 1px solid gray;
    border-radius: 5px;
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
  visibility: ${(props) => (props.isUp ? "hidden" : "visible")};
`;
const HeaderButton = styled.div`
  margin-bottom: 15px;
`;
export default Comments;

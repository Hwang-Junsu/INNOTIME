import React from "react";
import styled from "styled-components";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";
import { addComment, deleteComment } from "../redux/modules/slice";

const CommentBox = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 10px;

  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: gray;
`;
const Wrapper = styled.div``;
const Writer = styled.div`
  font-size: 10px;
`;
const Contents = styled.div``;
const Buttons = styled.div``;
const Button = styled.button``;

const Comment = ({ id, writer, body }) => {
  const dispatch = useDispatch();
  const onDelete = (id) => {
    dispatch(deleteComment(id));
  };
  const onEdit = () => {};
  return (
    <CommentBox>
      <Wrapper>
        <Writer>{writer}</Writer>
        <Contents>{body}</Contents>
      </Wrapper>
      <Buttons>
        <Button>
          <EditIcon />
        </Button>
        <Button onClick={() => onDelete(id)}>
          <DeleteIcon />
        </Button>
      </Buttons>
    </CommentBox>
  );
};

export default Comment;

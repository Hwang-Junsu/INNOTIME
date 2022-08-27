import React from "react";
import styled from "styled-components";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CancelIcon from "@material-ui/icons/Cancel";
import SaveIcon from "@material-ui/icons/Save";
import {useDispatch} from "react-redux";
import {deleteComment, updateComment} from "../redux/modules/slice";

const CommentBox = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: gray;
`;
const Wrapper = styled.div`
  width: 90%;
  margin-left: 10px;
`;
const Writer = styled.div`
  font-size: 10px;
`;
const Contents = styled.div``;
const Buttons = styled.div`
  margin-right: 20px;
`;
const Button = styled.button`
  margin-right: 5px;
  border-radius: 5px;
  border: 1px solid gray;
`;
const Input = styled.input`
  height: 100%;
  width: 100%;
  border: 1px solid gray;
  border-radius: 5px;
`;

const Comment = ({id, writer, body, onEditMode, disabled}) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [editComment, setEditComment] = React.useState(body);
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteComment(id));
  };
  const onIsEdit = () => {
    setIsEdit(!isEdit);
    onEditMode(id);
  };
  const updating = () => {
    dispatch(updateComment({id: id, body: editComment}));
    setIsEdit(false);
    onEditMode(null);
  };
  const onChange = (event) => {
    setEditComment(event.target.value);
  };

  return (
    <CommentBox>
      <Wrapper>
        {!isEdit ? (
          <>
            <Writer>{writer}</Writer>
            <Contents>{body}</Contents>
          </>
        ) : (
          <Input
            onChange={onChange}
            value={editComment}
            placeholder="내용을 입력해주세요."
            maxLength={100}
          />
        )}
      </Wrapper>
      <Buttons>
        <Button onClick={() => onIsEdit()} disabled={disabled}>
          {!isEdit ? <EditIcon /> : <CancelIcon />}
        </Button>
        {!isEdit ? (
          <Button onClick={() => onDelete()} disabled={disabled}>
            <DeleteIcon />
          </Button>
        ) : (
          <Button onClick={() => updating()} disabled={disabled}>
            <SaveIcon />
          </Button>
        )}
      </Buttons>
    </CommentBox>
  );
};

export default Comment;

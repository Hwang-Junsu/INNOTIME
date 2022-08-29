import React from "react";
import styled from "styled-components";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CancelIcon from "@material-ui/icons/Cancel";
import SaveIcon from "@material-ui/icons/Save";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {useDispatch, useSelector} from "react-redux";
import {deleteComment, updateComment} from "../redux/modules/slice";
import axios from "axios";

const CommentBox = styled.div`
  position: relative;
  width: 90%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  border: solid 1px #3399ff;
  border-radius: 0.4em;
  margin-bottom: 20px;
  background-color: #3399ff;
  color: white;
`;
const Tail = styled.div`
  position: absolute;
  left: 0;
  top: 70%;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-right-color: #3399ff;
  border-left: 0;
  border-bottom: 0;
  margin-top: -10px;
  margin-left: -20px;
`;
const Wrapper = styled.div`
  width: 90%;
  margin-left: 10px;
  font-size: 14px;
`;
const WriterBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
  width: 90%;
`;
const Writer = styled.div`
  font-size: 15px;
  margin-left: 7px;
`;
const Contents = styled.div``;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
const Button = styled.button`
  margin-right: 5px;
  border-radius: 5px;
  border: none;
  background-color: white;
  color: #3399ff;

  &:hover {
    transform: scale(1.1);
    transition: 0.1s linear;
  }
`;
const Input = styled.input`
  height: 20px;
  width: 90%;
  border: 1px solid gray;
  border-radius: 5px;
`;

const Comment = ({id, date, todoId, writer, body, onEditMode, disabled}) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [editComment, setEditComment] = React.useState(body);
  const dispatch = useDispatch();
  const onIsEdit = () => {
    setIsEdit(!isEdit);
    onEditMode(id);
  };
  const onDelete = async () => {
    //    console.log(id);
    const URL = `http://localhost:3001/comment/${id}`;

    await axios.delete(URL);
    dispatch(deleteComment(id));
    //    const commentList = await axios.get("http://localhost:3001/comment");
    //    console.log(id, commentList.data);
  };
  const updating = () => {
    dispatch(updateComment({id: id, body: editComment}));
    axios.patch(`http://localhost:3001/comment/${id}`, {body: editComment});
    setIsEdit(false);
    onEditMode(null);
  };
  const onChange = (event) => {
    setEditComment(event.target.value);
  };

  return (
    <>
      <WriterBox>
        <AccountCircleIcon />
        <Writer>{writer}</Writer>
      </WriterBox>
      <CommentBox>
        <Wrapper>
          {!isEdit ? (
            <>
              <Contents>
                {body.length >= 80 ? body.slice(0, 85) + "..." : body}
              </Contents>
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
        <Tail />
      </CommentBox>
    </>
  );
};

export default Comment;

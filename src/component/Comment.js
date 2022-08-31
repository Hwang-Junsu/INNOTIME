import React from "react";
import styled from "styled-components";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CancelIcon from "@material-ui/icons/Cancel";
import SaveIcon from "@material-ui/icons/Save";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useDispatch } from "react-redux";
import {
  __deleteComments,
  __updateComments,
} from "../redux/modules/commentSlice";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";

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
const Input = styled.input`
  height: 20px;
  width: 90%;
  border: 1px solid gray;
  border-radius: 5px;
`;
const WrapperContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Comment = ({ id, writer, body, onEditMode, disabled }) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [editComment, setEditComment] = React.useState(body);
  const [showing, setShowing] = React.useState(true);
  const toggleShowing = () => setShowing((prev) => !prev);

  const dispatch = useDispatch();
  const onIsEdit = () => {
    setIsEdit(!isEdit);
    onEditMode(id);
  };
  const onDelete = (_id) => {
    toggleShowing();
    setTimeout(() => dispatch(__deleteComments(_id)), 1000);
  };
  const updating = (_id, _body) => {
    dispatch(__updateComments({ id: _id, body: _body }));
    setIsEdit(false);
    onEditMode(null);
  };
  const onChange = (event) => {
    setEditComment(event.target.value);
  };

  return (
    <AnimatePresence>
      {showing && (
        <>
          <WrapperContainer
            variants={commentAnimation}
            initial="start"
            animate="end"
            exit="exit"
          >
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
                <Button
                  onClick={() => onIsEdit()}
                  disabled={disabled}
                  name="commentButton"
                >
                  {!isEdit ? <EditIcon /> : <CancelIcon />}
                </Button>
                {!isEdit ? (
                  <Button
                    onClick={() => onDelete(id)}
                    disabled={disabled}
                    name="commentButton"
                  >
                    <DeleteIcon />
                  </Button>
                ) : (
                  <Button
                    onClick={() => updating(id, editComment)}
                    disabled={disabled}
                    name="commentButton"
                  >
                    <SaveIcon />
                  </Button>
                )}
              </Buttons>
              <Tail />
            </CommentBox>
          </WrapperContainer>
        </>
      )}
    </AnimatePresence>
  );
};

export default Comment;

const commentAnimation = {
  start: { opacity: 0, y: 10 },
  end: { opacity: 1, y: 0 },
  exit: { opacity: 0, x: -300, transition: { duration: 1 } },
};

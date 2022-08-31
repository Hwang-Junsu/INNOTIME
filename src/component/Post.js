import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __deletePosts } from "../redux/modules/postSlice";
import Button from "./Button";
import DeleteIcon from "@material-ui/icons/Delete";

const Post = ({ work }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function deleteHandler(event) {
    event.stopPropagation(); //DESC: 삭제 버튼 클릭시 상세페이지에 진입하는 현상 방지
    dispatch(__deletePosts(work.id));
  }

  return (
    <PostListBox
      onClick={() => {
        navigate(`/community/${work.id}`);
      }}
    >
      <PostListBoxBody>
        <PostTitle>{work.title}</PostTitle>
        <PostWriterP>작성자: {work.writer}</PostWriterP>
      </PostListBoxBody>

      <Button name="listDeleteBtn" onClick={deleteHandler}>
        <DeleteIcon />
      </Button>
    </PostListBox>
  );
};

export default Post;

const PostTitle = styled.h3`
  font-family: "LeferiPoint-BlackObliqueA";
`;

let PostListBox = styled.div`
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

let PostListBoxBody = styled.div`
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

let PostWriterP = styled.p`
  font-size: 13px;
`;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getPosts } from "../redux/modules/postSlice";
import Post from "./Post";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (posts.length === 0) {
    return (
      <EmptyPage>
        <h3>앗! 아직 게시글이 없어요.</h3>➡
        <Button
          name="emptyPageBtn"
          hoverBackgroundColor="#3399ff"
          hoverTextColor="white"
          onClick={() => {
            navigate("/add");
          }}
        >
          새 글 작성하기
        </Button>
      </EmptyPage>
    );
  }

  return (
    <div>
      <ListTitle>자유게시판</ListTitle>
      <ListWrapper>
        {posts.map((work) => (
          <Post work={work} key={work.id} />
        ))}
      </ListWrapper>
    </div>
  );
};

export default Posts;

let ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 40px;
`;

let ListTitle = styled.h2`
  font-family: "LeferiPoint-BlackObliqueA";
  margin: 35px 0px 35px 0px;
`;

let EmptyPage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: #3399ff;
`;

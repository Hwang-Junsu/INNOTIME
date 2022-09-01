import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {__getPosts} from "../redux/modules/postSlice";
import Post from "./Post";
import Button from "./Button";
import {useNavigate} from "react-router-dom";
import client from "../client";
import {useInView} from "react-intersection-observer";

const Posts = () => {
  const navigate = useNavigate();

  const page = React.useRef(1);
  const [hasNextPage, setHasNextPage] = React.useState(true);
  const [posts, setPosts] = React.useState([]);
  const {isLoading, error} = useSelector((state) => state.posts);
  const [loading, setLoading] = React.useState(false);
  const [ref, inView] = useInView();
  const onDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };
  const fetch = useCallback(async () => {
    try {
      const {data} = await client.get(`/posts?_limit=2&_page=${page.current}`);
      setPosts((prevPosts) => [...prevPosts, ...data]);
      setHasNextPage(data.length === 2);
      if (data.length) {
        page.current += 1;
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  });
  useEffect(() => {
    if (inView && hasNextPage && !loading) {
      fetch();
      setLoading(true);
    }
  }, [fetch, hasNextPage, inView]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {posts.length === 0 ? (
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
      ) : (
        <>
          <ListTitle>자유게시판</ListTitle>
          <ListWrapper>
            {posts.map((work) => (
              <Post work={work} key={work.id} onDelete={onDelete} />
            ))}
          </ListWrapper>
        </>
      )}
      <Standard ref={ref}></Standard>
    </div>
  );
};

export default Posts;

const Standard = styled.div`
  width: 100%;
  height: 30px;
  bottom: 100px;
`;

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

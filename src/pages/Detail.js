// 글 상세 페이지
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Layout from "../component/Layout";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "../component/Modal";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Comments from "../component/Comments";
import { motion } from "framer-motion";
import { __getPosts } from "../redux/modules/postSlice";
import Button from "../component/Button";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.posts);
  const postList = posts.find((post) => post.id === id); //DESC: ID 숫자일 때만 +

  useEffect(() => {
    dispatch(__getPosts());
  }, []);

  //DESC: 수정하기 버튼 클릭시 모달창 구현
  const [isOpen, setIsOpen] = useState(false);
  const modalIsOpen = () => {
    setIsOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Layout>
        <DetailLayout>
          <DetailHeader>
            {/* <h2>Id : {todoList?.id}</h2> */}
            <h2>작성자 : {postList?.writer}</h2>
            <DetailBackBtn
              onClick={() => {
                navigate("/todo");
              }}
            >
              <span className="material-icons">
                <ArrowBack />
              </span>
            </DetailBackBtn>
          </DetailHeader>
          <DetailTitle>{postList?.title}</DetailTitle>
          <p>{postList?.body}</p>
        </DetailLayout>
        <Button name="detailEditBtn" onClick={modalIsOpen}>
          수정하기
        </Button>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
        <Comments />
      </Layout>
    </motion.div>
  );
};

export default Detail;

let DetailLayout = styled.div`
  margin: 20px 20px 20px 20px;
`;

let DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

let DetailTitle = styled.h1`
  padding: 10px 0px 20px 0px;
`;

let DetailBackBtn = styled.h2`
  cursor: pointer;
`;

// let DetailEditBtn = styled.button`
//   width: 90vw;
//   height: 35px;
//   position: absolute;
//   bottom: 60px;

//   background-color: transparent;
//   border: 1px solid lightgray;
//   border-radius: 10px;
// `;

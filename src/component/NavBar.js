import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import HomeIcon from "@material-ui/icons/Home";
import AddCommentIcon from "@material-ui/icons/AddComment";
import ForumIcon from "@material-ui/icons/Forum";
import {useNavigate} from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Container>
      <Menu variants={menuAnimation} onClick={() => navigate("/")}>
        <HomeIcon />
        <MenuName>Home</MenuName>
      </Menu>
      <Menu variants={menuAnimation} onClick={() => navigate("/add")}>
        <AddCommentIcon />
        <MenuName>Add Post</MenuName>
      </Menu>
      <Menu variants={menuAnimation} onClick={() => navigate("/todo")}>
        <ForumIcon />
        <MenuName>Community</MenuName>
      </Menu>
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 35rem;
  height: 6rem;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  left: 60px;
  top: -20px;
`;

const Menu = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 20rem;
  padding: 20px;
  background-color: #3399ff;
  border: 2px solid rgba(256, 256, 256, 1);
  border-radius: 10px;
  margin-bottom: 10px;
  color: white;
`;
const MenuName = styled.div`
  margin-left: 10px;
`;

const menuAnimation = {
  visible: {opacity: 0, x: -20},
  end: {opacity: 1, x: 0},
};

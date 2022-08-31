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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 20px;
`;

const Menu = styled(motion.div)`
  display: flex;
  width: 60%;
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
  visible: {opacity: 0, y: -20},
  end: {opacity: 1, y: 0},
};

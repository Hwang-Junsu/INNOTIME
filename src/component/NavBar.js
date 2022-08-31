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
      <Menu variants={menuAnimation} onClick={() => navigate("/community")}>
        <ForumIcon />
        <MenuName>Community</MenuName>
      </Menu>
    </Container>
  );
}
// background-color: rgba(0, 0, 0, 0);
const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 10vh;
  position: absolute;
  left: calc(1.5em + 100%);
  top: -20px;
`;

const Menu = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 30%;
  height: 30%;
  padding: 15px;
  background-color: #3399ff;
  border: 2px solid rgba(256, 256, 256, 1);
  border-radius: 10px;
  margin-bottom: 10px;
  color: white;
`;
const MenuName = styled.div`
  margin-left: 10px;
  padding-top: 5px;
  font-family: "LeferiPoint-BlackObliqueA";
  font-size: calc(0.001em + 1vw);
`;

const menuAnimation = {
  visible: {opacity: 0, x: -20},
  end: {opacity: 1, x: 0},
};

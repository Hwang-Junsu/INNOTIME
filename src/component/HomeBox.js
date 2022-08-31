import styled from "styled-components";
import { motion } from "framer-motion";

const HomeBox = ({ title, onClick, value }) => {
  return (
    <StyledHomeBox
      onClick={onClick}
      variants={createAnimation}
      initial="start"
      animate="end"
      whileHover="hover"
    >
      {value === "todoButton" ? (
        <>
          <MotionBar variants={barVariantsToDo} />
          <MotionBar variants={barVariantsToDo} />
          <MotionBar variants={barVariantsToDo} />
          <MotionBar variants={barVariantsToDo} />
        </>
      ) : (
        <>
          <MotionBar variants={barVariantsAdd} />
          <MotionBar variants={barVariantsAdd} />
          <MotionBar variants={barVariantsAdd} />
          <MotionBar variants={barVariantsAdd} />
        </>
      )}

      <StyledTitle>{title}</StyledTitle>
    </StyledHomeBox>
  );
};

export default HomeBox;

const createAnimation = {
  start: { opacity: 0, y: -15 },
  end: { opacity: 1, y: 0, transition: { type: "spring", delay: 0.3 } },
  hover: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const barVariantsToDo = {
  start: {
    opacity: 0,
    y: 10,
  },
  hover: {
    opacity: 1,
    y: 0,
  },
};
const barVariantsAdd = {
  start: {
    opacity: 0,
    y: 20,
    x: 20,
  },
  hover: {
    opacity: 1,
    x: 0,
    y: 0,
  },
};

const StyledHomeBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 400px;
  border: 2px solid #3399ff;
  color: #3399ff;
  background-color: white;
  align-items: center;
  justify-content: center;
  margin: 20px;
  padding: 16px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    transition: background-color 0.4s;
    background-color: #3399ff;
    color: white;
  }
`;

const StyledTitle = styled.h2``;

const MotionBar = styled(motion.div)`
  width: 60%;
  height: 15%;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 15px;
`;

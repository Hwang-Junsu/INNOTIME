import styled from "styled-components";
import {motion} from "framer-motion";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import React from "react";

const HomeBox = ({title, onClick, value}) => {
  const constraintsRef = React.useRef(null);
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
        <Wrapper>
          <DocIcon ref={constraintsRef} variants={barVariantsAdd}>
            <AssignmentOutlinedIcon style={{fontSize: 250}} />
          </DocIcon>
          <PencilIcon>
            <PencilImg
              src="https://cdn-icons-png.flaticon.com/512/2071/2071353.png"
              drag
              dragSnapToOrigin
              dragelastic={0}
              dragConstraints={constraintsRef}
              variants={pencilVariant}
            />
          </PencilIcon>
        </Wrapper>
      )}

      <StyledTitle>{title}</StyledTitle>
    </StyledHomeBox>
  );
};

//<CreateOutlinedIcon style={{fontSize: 100}} />
export default HomeBox;

const createAnimation = {
  start: {opacity: 0, y: -15},
  end: {opacity: 1, y: 0, transition: {type: "spring", delay: 0.3}},
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
  },
  hover: {
    opacity: 1,
  },
};

const pencilVariant = {
  start: {
    opacity: 0,
    x: -20,
    transition: {type: "bounce"},
  },
  hover: {
    opacity: 1,
    x: 20,
  },
};

const StyledHomeBox = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 37vh;
  width: 20vw;
  min-width: 200px;
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

const StyledTitle = styled.h2`
  font-family: "LeferiPoint-BlackObliqueA";
  position: absolute;
  bottom: 5px;
`;

const MotionBar = styled(motion.div)`
  width: 60%;
  height: 15%;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 15px;
`;

const Wrapper = styled(motion.div)`
  position: relative;
`;

const DocIcon = styled(motion.div)`
  z-index: 1;
`;

const PencilImg = styled(motion.img)`
  width: 100%;
  height: 100%;
`;

const PencilIcon = styled(motion.div)`
  position: absolute;
  width: 80px;
  height: 80px;
  bottom: 85px;
  left: 95px;
  color: #284a77;
  z-index: 2;
`;

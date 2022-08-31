import styled from "styled-components";
import {motion} from "framer-motion";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

const HomeBox = ({title, onClick, value}) => {
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
          <DocIcon variants={barVariantsAdd}>
            <AssignmentOutlinedIcon style={{fontSize: 250}} />
          </DocIcon>
          <PencilIcon variants={pencilVariant}>
            <CreateOutlinedIcon style={{fontSize: 100}} />
          </PencilIcon>
        </Wrapper>
      )}

      <StyledTitle>{title}</StyledTitle>
    </StyledHomeBox>
  );
};

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
    y: 20,
    x: 20,
  },
  hover: {
    opacity: 1,
    x: 0,
    y: 0,
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
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 400px;
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

const StyledTitle = styled.h2``;

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

const PencilIcon = styled(motion.div)`
  position: absolute;
  bottom: 65px;
  left: 80px;
  color: black;
  z-index: 2;
`;

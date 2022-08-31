import styled from "styled-components";
import { motion } from "framer-motion";
const SubTitle = ({ title }) => {
  const text = title;

  return (
    <LogoTitle
      variants={CharacterAnimation}
      initial="start"
      animate="end"
      exit="exit"
    >
      {text.split("").map((char, i) => {
        const key = `${i}`;
        return (
          <Character variants={CharAnimation} key={key}>
            {char}
          </Character>
        );
      })}
    </LogoTitle>
  );
};

const LogoTitle = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: gray;
  overflow: hidden;
  height: 80px;
`;
const CharacterAnimation = {
  start: { x: 20, opacity: 0 },
  end: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.05,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};
const Character = styled(motion.div)`
  font-size: 27px;
`;
const CharAnimation = {
  start: { x: 10, opacity: 0 },
  end: { x: 0, opacity: 1 },
};

export default SubTitle;

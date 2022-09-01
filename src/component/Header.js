// 페이지별 공통 header
import styled from "styled-components";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import NavBar from "./NavBar";
import {AnimatePresence, motion} from "framer-motion";
import SubTitle from "./SubTitle";

const Header = () => {
  const [onNav, setOnNav] = React.useState(false);
  const [isHover, setIsHover] = React.useState(false);

  const toggleOnNav = () => setOnNav((prev) => !prev);

  return (
    <StyledHeader>
      <Wrapper>
        <MenuIcon
          fontSize="large"
          onClick={() => {
            toggleOnNav();
          }}
        />
        <AnimatePresence>
          {onNav ? (
            <Navigator
              variants={navAnimation}
              initial="visible"
              animate="end"
              exit="exit"
            >
              <NavBar />
            </Navigator>
          ) : null}
        </AnimatePresence>
      </Wrapper>
      <StyledTitle
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        {/* <AnimatePresence>
          {!isHover ? (
            <HeaderTitle>INNOTIME.</HeaderTitle>
          ) : (
            <StyledHeroSubTitle
              variants={CharacterAnimation}
              initial="start"
              animate="end"
              exit="exit"
            >
              <Character variants={CharAnimation}>모</Character>
              <Character variants={CharAnimation}>두</Character>
              <Character variants={CharAnimation}>의</Character>
              <Character variants={CharAnimation}>&nbsp;</Character>
              <Character variants={CharAnimation}>이</Character>
              <Character variants={CharAnimation}>노</Character>
              <Character variants={CharAnimation}>베</Character>
              <Character variants={CharAnimation}>이</Character>
              <Character variants={CharAnimation}>션</Character>
              <Character variants={CharAnimation}>&nbsp;</Character>
              <Character variants={CharAnimation}>캠</Character>
              <Character variants={CharAnimation}>프</Character>
              <Character variants={CharAnimation}>&nbsp;</Character>
              <Character variants={CharAnimation}>커</Character>
              <Character variants={CharAnimation}>뮤</Character>
              <Character variants={CharAnimation}>니</Character>
              <Character variants={CharAnimation}>티</Character>
            </StyledHeroSubTitle>
          )}
        </AnimatePresence> */}
        <AnimatePresence>
          {!isHover ? (
            <HeaderTitle>INNOTIME.</HeaderTitle>
          ) : (
            <SubTitle
              title={`모두의\u00A0이노베이션\u00A0캠프\u00A0커뮤니티`}
            />
          )}
        </AnimatePresence>
      </StyledTitle>
    </StyledHeader>
  );
};

export default Header;

// const CharacterAnimation = {
//   start: { x: 20, opacity: 0 },
//   end: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       duration: 0.5,
//       bounce: 0.5,
//       delayChildren: 0.05,
//       staggerChildren: 0.05,
//     },
//   },
//   exit: {
//     opacity: 0,
//     transition: { duration: 0.5 },
//   },
// };
// const CharAnimation = {
//   start: { x: 10, opacity: 0 },
//   end: { x: 0, opacity: 1 },
// };

const Character = styled(motion.div)`
  font-size: calc(0.35em + 1vw);
`;

// const StyledHeroSubTitle = styled(motion.div)`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   color: gray;
//   overflow: hidden;
//   height: 80px;
// `;

const HeaderTitle = styled.div`
  font-family: "Monoton", cursive;
  font-size: calc(0.75em + 1vw);
`;

const StyledHeader = styled.div`
  display: flex;
  height: 120px;
  margin: auto;
  justify-content: space-between;
  padding: 8px 0;
`;

const Wrapper = styled.div`
  position: relative;
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 40px;
  margin: 0;
  padding: 0;
  color: black;
  font-family: "Monoton", cursive;
`;

const Navigator = styled(motion.div)``;
const navAnimation = {
  visible: {opacity: 0},
  end: {opacity: 1, transition: {staggerChildren: 0.2}},
  exit: {opacity: 0},
};

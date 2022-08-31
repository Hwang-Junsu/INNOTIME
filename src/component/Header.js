// 페이지별 공통 header
import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import NavBar from "./NavBar";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [onNav, setOnNav] = React.useState(false);

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
      <StyledTitle>INNOTIME</StyledTitle>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
`;

const Wrapper = styled.div`
  position: relative;
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: center;
  font-weight: bold;
  font-size: 27px;
  margin: 0;
  padding: 0;
`;

const Navigator = styled(motion.div)``;
const navAnimation = {
  visible: { opacity: 0 },
  end: { opacity: 1, transition: { staggerChildren: 0.2 } },
  exit: { opacity: 0 },
};

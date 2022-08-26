import styled from "styled-components";

const Banner = ({ title, backgroundColor, textColor }) => {
  return (
    <StyledHeroContainer
      textColor={textColor}
      backgroundColor={backgroundColor}
    >
      <StyledHeroTitle>{title}</StyledHeroTitle>
    </StyledHeroContainer>
  );
};

export default Banner;

const StyledHeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: ${(props) => props.textColor || "black"};
  border: 2px solid ${(props) => props.backgroundColor || "black"};
  background-color: ${(props) => props.backgroundColor || "black"};
`;

const StyledHeroTitle = styled.h2``;

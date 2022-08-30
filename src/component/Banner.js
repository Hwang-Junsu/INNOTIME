import styled from "styled-components";

const Banner = ({ title, backgroundColor, textColor }) => {
  return (
    <StyledBannerContainer
      textColor={textColor}
      backgroundColor={backgroundColor}
    >
      <StyledHeroTitle>{title}</StyledHeroTitle>
    </StyledBannerContainer>
  );
};

export default Banner;

const StyledBannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  height: 150px;
  font-size: large;
  color: ${(props) => props.textColor || "black"};
  border: 2px solid ${(props) => props.backgroundColor || "black"};
  background-color: ${(props) => props.backgroundColor || "black"};
`;

const StyledHeroTitle = styled.h2``;

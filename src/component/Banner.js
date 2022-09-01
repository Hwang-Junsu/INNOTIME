import styled from "styled-components";

const Banner = ({title, backgroundColor, textColor}) => {
  return (
    <StyledBannerContainer
      textColor={textColor}
      backgroundColor={backgroundColor}
    >
      <Wrapper>
        <StyledHeroTitle>{title}</StyledHeroTitle>
      </Wrapper>
    </StyledBannerContainer>
  );
};

export default Banner;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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

const StyledHeroTitle = styled.div`
  font-family: "LeferiPoint-BlackObliqueA";
  font-size: calc(1.5em + 0.8vw);
  text-align: center;
`;

import styled from "styled-components";

const HomeBox = ({ title, onClick }) => {
  return (
    <StyledHomeBox onClick={onClick}>
      <StyledTitle>{title} </StyledTitle>
    </StyledHomeBox>
  );
};

export default HomeBox;

const StyledHomeBox = styled.div`
  display: flex;
  height: 96px;
  border: 2px solid #eee;
  color: #3399ff;
  align-items: center;
  justify-content: center;
  margin: 20px;
  padding: 16px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: #3399ff;
    color: white;
  }
`;

const StyledTitle = styled.h2``;

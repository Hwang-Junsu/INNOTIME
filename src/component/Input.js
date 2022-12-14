import styled from "styled-components";

const Input = (props) => {
  return <StyledInput {...props} required></StyledInput>;
};

const StyledInput = styled.input`
  margin: 0.4rem;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 0 8px 0;
  height: 40px;
  width: ${({ width }) => width || ""};
`;

export default Input;

import {createGlobalStyle} from "styled-components";
import "./font.css";

const GlobalStyle = createGlobalStyle`
*{
    font-family: "LeferiPoint-WhiteObliqueA";
}
html{
    font-size: 16px;
        
    &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #3498db;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: aliceblue;
    border-radius: 10px;
  }
}
main{
    height: 60%;
}
div {
}
`;

export default GlobalStyle;

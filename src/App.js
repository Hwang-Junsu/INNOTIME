import Router from "./Router";
import {AnimatePresence} from "framer-motion";
import GlobalStyle from "./style/global";
import "./style/font.css";

function App() {
  if (process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
  }
  console.log("확인용 콘솔입니다.");
  return (
    <>
      <GlobalStyle />
      <AnimatePresence>
        <Router />
      </AnimatePresence>
    </>
  );
}

export default App;

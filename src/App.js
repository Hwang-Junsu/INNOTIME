import Router from "./Router";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./style/GlobalStyle";

function App() {
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

import Router from "./Router";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence>
        <Router />
      </AnimatePresence>
    </>
  );
}

export default App;

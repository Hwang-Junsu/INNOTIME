import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Detail from "./pages/Detail";
import Add from "./pages/Add";
import ToDoList from "./pages/ToDoList";
import Home from "./pages/Home";

const Router = () => {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<ToDoList />} />
          <Route path="/todo/:id" element={<Detail />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
};

export default Router;

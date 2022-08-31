import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Detail from "./pages/Detail";
import Add from "./pages/Add";
import Posts from "./pages/Community";
import Home from "./pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Posts />} />
        <Route path="/community/:id" element={<Detail />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

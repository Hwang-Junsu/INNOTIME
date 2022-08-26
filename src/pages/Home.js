import React from "react";
import {useDispatch} from "react-redux/es/exports";
import Layout from "../component/Layout";
import {toDoSlice} from "../redux/modules/slice";
const Home = () => {
  const dispatch = useDispatch();
  dispatch(toDoSlice.actions.ADD()); // redux test

  return <Layout></Layout>;
};

export default Home;

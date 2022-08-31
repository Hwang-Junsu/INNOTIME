import axios from "axios";

const client = axios.create({
  baseURL: "https://innotime-sparta-8.herokuapp.com/",
});

export default client;

import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || window.location.origin;

const instance = axios.create({
  baseURL: API_BASE_URL,
});

export default instance;

import axios from "axios";

export const setAuthToken = () => {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    axios.defaults.headers.common["Authorization"] = none;
  }
};

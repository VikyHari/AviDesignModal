import axios from "axios";


const API = axios.create({
  baseURL: "http://localhost:3000/api", 
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const registerUser = async (userData) => {
  const res = await API.post("/register", userData);
  return res.data;
};

export const loginUser = async (userData) => {
  const res = await API.post("/login", userData);
  localStorage.setItem("token", res.data.token);
  return res.data;
};

export const getProfile = async () => {
  const res = await API.get("/profile");
  return res.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};

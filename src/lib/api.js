import { NEXT_PUBLIC_BACK_END_URL } from "@/configs";
import axios from "axios";

export const handleGet = (url, callback = f) => {
  axios.get(`${NEXT_PUBLIC_BACK_END_URL}${url}`).then((res) => callback(res));
};

export const handlePost = async (url, data, callback, catchErr) => {
  await axios
    .post(`${NEXT_PUBLIC_BACK_END_URL}${url}`, data)
    .then((res) => callback(res))
    .catch((err) => catchErr(err));
};

export const handleDelete = async (url) => {
  await axios.delete(`${NEXT_PUBLIC_BACK_END_URL}${url}`);
};

export const handlePut = async (url, data, callback) => {
  await axios.put(`${NEXT_PUBLIC_BACK_END_URL}${url}`, data);
};

import axios from "axios";

const API_URL = "http://localhost:3001/books";

export const getAllBooks = () => axios.get(API_URL);
export const getBookById = (id) => axios.get(`${API_URL}/${id}`);

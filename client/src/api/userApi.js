import { post } from "./requester"

BASE_URL = "http://localhost:3030/users";

export const login = (email, password) => post(`${BASE_URL}/login`, { email, password });
export const register = (email, password) => post(`${BASE_URL}/register`, { email, password });
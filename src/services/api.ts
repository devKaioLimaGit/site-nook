import axios from "axios";


export const api = axios.create({
    baseURL: "https://nooke-ashen.vercel.app"
});
import axios from "axios";


export const api = axios.create({
    baseURL: "https://nook-taupe.vercel.app"
});
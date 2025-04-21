import axios from "axios";


export const api = axios.create({
    baseURL: "https://nook-amber.vercel.app"
});
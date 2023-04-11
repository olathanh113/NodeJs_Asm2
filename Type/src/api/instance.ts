let token = JSON.parse(localStorage.getItem("user") as string);
import axios from "axios";
import { json } from "react-router-dom";

const instance = axios.create({
    baseURL: "http://localhost:8080/api/",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.accessToken}`,

    },
    timeout: 10000
})
export default instance;
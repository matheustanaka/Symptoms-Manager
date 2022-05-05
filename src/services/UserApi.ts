import axios from "axios";

export const UserApi = axios.create({
    baseURL: "https://crud-challenge-symptoms.herokuapp.com",
    headers: {
        "Content-type": "application/json"
    } 
})
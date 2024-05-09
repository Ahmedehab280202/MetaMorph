import axios from "axios";
import { RepositoryData } from "../models/GithubPublish";

const baseUrl = "http://localhost:3002/project";

export const publishRepository = async (RepositoryData) => {
    try {
        const token = localStorage.getItem("token");
        const data = RepositoryData

        const headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };

        const response = await axios.post(`${baseUrl}/github`, data, { headers });


        return response.status;
    } catch (error) {
        console.log("Error from publishRepository service try catch:", error);
        return error.response.data;
    }
}


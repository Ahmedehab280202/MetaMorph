import axios from "axios";
import { RepositoryData } from "../models/GithubPublish";

const baseUrl = "http://localhost:8080/metadata/project";

export const publishRepository = async (RepositoryData) => {
    try {
        const token = localStorage.getItem("token");
        const data = {
            userName: RepositoryData.userName,
            accessToken: RepositoryData.accessToken,
            repositoryName: RepositoryData.repositoryName,
        }

        const headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };

        const response = await axios.post(`${baseUrl}/test`, data, { headers });


        return response.data;
    } catch (error) {
        console.log("Error from publishRepository service try catch:", error);
        return error.response.data;
    }
}


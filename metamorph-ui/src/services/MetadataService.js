import axios from "axios";
import { MetadataModel } from "../models/MetadataModel";

const baseUrl = "http://localhost:";

export const createProject = async (MetadataModel) => {

    try {
        const data = {
            projectName: MetadataModel.projectName,
            figmaToken: MetadataModel.figmaToken,
            fileUrl: MetadataModel.fileUrl,
            rawUiData: MetadataModel.rawUiData,
            jsonData: MetadataModel.jsonData,
        };

        const headers = {
            "Content-Type": "application/json",
        };

        const response = await axios.post(`${baseUrl}/3ala hasab urleh`, data, { headers });
        return response.data;
    } catch (error) {
        console.log("Error from register service try catch:", error);
        return error.response.data;
    }

}

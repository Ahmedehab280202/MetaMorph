import axios from "axios";

// Ensure that MetaDataModel is imported properly from "../models/MetaDataModel"
import { MetaDataModel } from "../models/MetaDataModel";

const baseUrl = "http://localhost:8080/metadata/project";

export const createProject = async (metaDataModel) => {
    try {
        const token = localStorage.getItem("token");
        const data = {
            projectName: metaDataModel.projectName,
            figmaToken: metaDataModel.figmaToken,
            fileUrl: metaDataModel.fileUrl,
            // raw_ui_data: metaDataModel.raw_ui_data,
            // raw_uml_data: metaDataModel.raw_uml_data,
        };

        const headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };

        console.log("Data to be sent:", data);
        
        const response = await axios.post(baseUrl, data, { headers });

        console.log("Response:", response.data);

        // Return the response data
        return response.data;
    } catch (error) {
        console.log("Error from metadata service try catch:", error);

        // Return the error response data
        return error.response.data;
    }
};

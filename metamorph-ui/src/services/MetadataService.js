import axios from "axios";
import { MetaDataModel } from "../models/MetaDataModel";

const baseUrl = "http://localhost:3002/project";

export const createProject = async (MetaDataModel) => {

    try {
        const data = {
            // projectName: MetaDataModel.projectName,
            // figmaToken: MetaDataModel.figmaToken,
            // fileUrl: MetaDataModel.fileUrl,
            raw_ui_data: MetaDataModel.rawUiData,
            raw_uml_data: MetaDataModel.rawUmlData,
        };

        const headers = {
            "Content-Type": "application/json",
        };

        console.log(data)

        const response = await axios.post(`${baseUrl}/code`, data, { headers });

        console.log(response)

        return response.data;
    } catch (error) {
        console.log("Error from metadara service service try catch:", error);
        return error.response.data;
    }

}

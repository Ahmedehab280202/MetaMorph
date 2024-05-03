import axios from "axios";

import { FrontEndModel } from "../models/FrontEndDataModel";

const baseUrl = "http://localhost:8080/metadata/project/metamorphtest";

export const getFrontEndData = async (FrontEndModel) => {

    try {
        const token = localStorage.getItem("token");
        const data = {
            html_code:FrontEndModel.html_code,
            css_code: FrontEndModel.css_code,
        };

        console.log("test 1 getFrontEndData service test test test test !!!!!")

        const headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };

        console.log("test 2 getFrontEndData service test test test test !!!!!")

        console.log("fetched data:", data);
        
        const response = await axios.get(baseUrl, data, { headers });

        console.log("test 3 getFrontEndData service test test test test !!!!!")

        console.log("Response:", response.data);

        // Return the response data
        return response.data;
    } catch (error) {
        console.log("Error from metadata service try catch:", error);

        // Return the error response data
        return error.response.data;
    }
};

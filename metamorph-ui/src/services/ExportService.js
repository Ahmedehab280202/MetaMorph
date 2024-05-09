import axios from "axios";

const baseUrl = "http://localhost:3002/project/zip";

export const exportService = (data) => {

    try {
        const response = axios.post(baseUrl,data,{responseType:'blob'});
        return response;
    } catch (error) {
        console.log("error from exportService");
        return error.response.data;
    }


}


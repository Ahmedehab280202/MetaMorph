import axios from "axios";

import { FrontEndModel } from "../models/FrontEndDataModel";


const baseUrl = "http://localhost:8080/metadata/project";

export const getFrontEndData = async (projectName) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found in localStorage");
    }
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const response = await axios.get(`${baseUrl}/${projectName}`, { headers });
    console.log("response:", response);
    return response.data;
  } catch (error) {
    console.log("Error from metadata service:", error);
    if (error.response && error.response.data) {
      return error.response.data;
    }
    return { data: error.message };
  }
};


export const setProjectNameLocalStorage = (projectName) => {
  localStorage.setItem("projectName", JSON.stringify(projectName));

}

export const getProjectNameLocalStorage = () => {

  const savedData = JSON.parse(localStorage.getItem('projectName'));

  return savedData;
}

export const setProjectNumberCount = (projectCount) => {
  localStorage.setItem("projectCount", JSON.stringify(projectCount))
}

export const getProjectNumberCount = () => {
  const savedData = JSON.parse(localStorage.getItem('projectCount'));
  return savedData
}
import axios from 'axios';
import { RegisterModel } from '../models/AuthModel';

const baseUrl = "http://localhost:8080/auth";

export const register = async (registerModel) => {
    try {
        const data = {
            firstname: registerModel.firstname,
            lastname: registerModel.lastname,
            email: registerModel.email,
            username: registerModel.username,
            password: registerModel.password,
        };

        const headers = {
            "Content-Type": "application/json",
        };

        const response = await axios.post(`${baseUrl}/register`, data, { headers });
        return response.data; // Make sure response.data contains the required information
    } catch (error) {
        console.log("Error from register service try catch:", error);
        return error.response.data; // Return a consistent error format
    }
};

export const login = async (LoginModel) => {
    try {
        var data = {
            username: LoginModel.username,
            password: LoginModel.password,
        };
        const headers = {
            "Content-Type": "application/json",
        };
        let response = await axios.post(`${baseUrl}/login`, data, { headers });
        return response;
    } catch (error) {
        console.log("Error from login service try catch:", error);
        return error.response.data;
    }
};

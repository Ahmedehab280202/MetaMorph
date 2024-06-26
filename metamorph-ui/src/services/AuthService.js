import axios from 'axios';
import { RegisterModel } from '../models/AuthModel';

const baseUrl = "http://localhost:8080/auth";

export const signup = async (registerModel) => {
    try {
        const data = {
            firstname: registerModel.firstname,
            lastname: registerModel.lastname,
            email: registerModel.email,
            username: registerModel.username,
            password: registerModel.password,
            age:registerModel.age,
            job:registerModel.job,
            phonenumber:registerModel.phonenumber
        };

        const headers = {
            "Content-Type": "application/json",
        };

        const response = await axios.post(`${baseUrl}/register`, data, { headers });
        return response.data; 
    } catch (error) {
        console.log("Error from register service try catch:", error);
        return error.response.data; 
    }
};

export const login = async (LoginModel) => {
    try {
        var data = {
            email: LoginModel.email,
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

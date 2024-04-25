import axios from 'axios';
import { RegisterModel } from '../models/AuthModel';

const baseUrl = "http://localhost:8080/auth"

export const register = async(RegisterModel) =>{
    try{
        var data = {
            firstname : RegisterModel.firstname,
            lastname : RegisterModel.lastname,
            phonenumber : RegisterModel.phonenumber,
            email : RegisterModel.email,
            username : RegisterModel.username,
            password : RegisterModel.password,
        }
        const headers = {
            "Content-Type": "application/json",
          };
        let response = await axios.post(`${baseUrl}/register`, data, {headers})
        return response.data;
    }catch (error){
        return error.response.data;
    }
}
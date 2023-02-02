import axios, { AxiosResponse } from "axios"
import UserLogin from "../models/request/UserLogin"
import UserRegister from "../models/request/UserRegister"
import UserMe from "../models/response/UserMe"

// BaseUrl
const basePath: string = 'https://localhost:44382/api/v1'
// Content-Type
const content_type: string = 'application/json'
// Perform localStorage
const getToken = (): string | null => {
    var token: string | null = localStorage.getItem('token')
    return token
}
// Headers
let headerAuthJson = {
    Authorization: true,
    "Content-Type": "application/json",
};

// Call Api
const userGetMe = async (token: string): Promise<UserMe> => {
    let response: AxiosResponse<UserMe> = await axios.get(`${basePath}/me`, { headers: { "Authorization": token } })
    return response.data
}

const guestCreateUser = async (form: UserRegister): Promise<UserMe> => {
    let response: AxiosResponse<UserMe> = await axios.post(`${basePath}/register`, form)
    return response.data
}

const userLogin = async (form: UserLogin): Promise<string> => {
    let response: AxiosResponse<string> = await axios.post(`${basePath}/login`, form)
    return response.data
}

//Exports
export default { guestCreateUser, userLogin, userGetMe }

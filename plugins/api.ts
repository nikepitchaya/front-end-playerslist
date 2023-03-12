import axios, { AxiosResponse } from "axios"
import UserLogin from "../models/request/UserLogin"
import UserRegister from "../models/request/UserRegister"
import UserMe from "../models/response/UserMe"
import GameList from "../models/response/GameList"
import UserGameList from "../models/response/UserGameList"
import UserAddMyGame from "../models/request/UserAddMyGame"
// BaseUrl
const basePath: string = 'https://localhost:44382/api/v1'

// Perform localStorage
const getToken = (): string | null => {
    let token: string | null = localStorage.getItem('token')
    return token
}

// Headers
let headerAuthJson = {
    Authorization: true,
    "Content-Type": "application/json",
};

// Call Api
const userGetMe = async (): Promise<UserMe> => {
    let token: string | null = getToken()
    let response: AxiosResponse<UserMe> = await axios.get(`${basePath}/me`, { headers: { "Authorization": token } })
    return response.data
}

const guestCreateUser = async (form: UserRegister): Promise<UserMe> => {
    // console.log("TEST")
    let response: AxiosResponse<UserMe> = await axios.post(`${basePath}/register`, form)
    return response.data
}

const userLogin = async (form: UserLogin): Promise<string> => {
    let response: AxiosResponse<string> = await axios.post(`${basePath}/login`, form)
    return response.data
}

const userGetGameList = async (): Promise<GameList[]> => {
    let response: AxiosResponse<GameList[]> = await axios.get(`${basePath}/allgamecategory`)
    return response.data
}

const userAddMyGame = async (form: UserAddMyGame): Promise<string> => {
    let token: string | null = getToken()
    let response: AxiosResponse<string> = await axios.post(`${basePath}/addgamecategory`, form, { headers: { "Authorization": token } })
    return response.data
}

const userGetMyGameList = async (): Promise<UserGameList[]> => {
    let token: string | null = getToken()
    let response: AxiosResponse<UserGameList[]> = await axios.get(`${basePath}/mygamecategory`,{ headers: { "Authorization": token } })
    return response.data
}

//Exports
export default { guestCreateUser, userLogin, userGetMe, userGetGameList, userAddMyGame, userGetMyGameList }

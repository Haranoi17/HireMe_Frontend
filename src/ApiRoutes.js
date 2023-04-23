import axios from "axios"
import getMockOffers from "./MockData/MockOffers"

const loginEndpoint = "/Account/login"
const registerEndpoint = "/Account/register"

const postConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const api = axios.create({
    baseUrl: 'https://localhost:7046/api'
})

export const loginUser = async (loginCredentials) => {
    const response = await api.post(loginEndpoint, loginCredentials, postConfig)
    return response.data
}

export const registerUser = async (registerCredentials) => {
    const response = await api.post(registerEndpoint, registerCredentials, postConfig)
    return response.data
}

export const getOffers = async () => {
    return getMockOffers();
}
import axios from "axios"

const loginEndpoint = "Account/login"
const logoutEndpoint = "Account/logout"
const registerEndpoint = "Account/register"
const getLoggedUserEndpoint = "Account/user"
const isLoggedInEndpoint = "Account/isLoggedIn"

const createOfferEndpoint = "Offer"
const getUserOfferEndpoint = "Offer"

const api = axios.create()
api.defaults.baseURL = 'https://localhost:7046/api/'
api.defaults.headers = { 'Content-Type': 'application/json' }
api.defaults.withCredentials = true;

export const loginUser = async (loginCredentials) => {
    const response = await api.post(loginEndpoint, loginCredentials)
    return response.data
}

export const logoutUser = async () => {
    const response = await api.post(logoutEndpoint);
    return response.data;
}

export const registerUser = async (registerCredentials) => {
    const response = await api.post(registerEndpoint, registerCredentials)
    return response.data
}

export const checkIfLoggedIn = async () => {
    const response = await api.post(isLoggedInEndpoint)
    return response.data;
}

export const getLoggedUser = async () => {
    const response = await api.get(getLoggedUserEndpoint)
    return response.data;
}

export const createOffer = async (createOfferDto) => {
    const response = await api.post(createOfferEndpoint, createOfferDto)
    return response.data;
}

export const getLoggedInUserOffers = async () => {
    const response = await api.get(getUserOfferEndpoint)
    return response.data;
}
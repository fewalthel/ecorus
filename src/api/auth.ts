import axiosConfig from "../axiosConfig.ts";
import {CreateUserDto, LoginUserDto} from "../app/models/generated";

export const handleRegister = async (data: CreateUserDto) => {
    try {
        const response = await axiosConfig.post('/api/auth/register', data);
        const refreshToken = response.data.refreshToken
        localStorage.setItem('refreshToken', refreshToken)
    } catch (error: any) {
        console.error(error.message);
    }
}


export const handleSignIn = async (data: LoginUserDto) => {

    try {
        const response = await axiosConfig.post('/api/auth/login', data)
        const refreshToken = response.data.refreshToken
        localStorage.setItem('refreshToken', refreshToken)
        return response
    } catch (error: any) {
        console.error(error.message)
    }
}

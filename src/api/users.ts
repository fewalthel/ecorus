import axiosConfig from "../axiosConfig";

export const fetchHistory = async () => {
    try {
        const response = await axiosConfig.get('/api/balance/history')
        return response.data;
    } catch (error) {
        console.error(error)
    }
}
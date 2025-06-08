import axiosConfig from "../axiosConfig.ts";
import {ProductGender, ProductType} from "../app/models/generated";

export interface ParametersData {
    type: ProductType
    gender: ProductGender
    brand: string
    limit: number
    offset: number
}

export const fetchProducts = async ({ data }: ParametersData) => {
    try {
        const queryParams = new URLSearchParams();

        if (data?.type) queryParams.append('type', data.type);
        if (data?.gender) queryParams.append('gender', data.gender);
        if (data?.brand) queryParams.append('brand', data.brand);
        if (data?.limit) queryParams.append('limit', data.limit.toString());
        if (data?.offset) queryParams.append('offset', data.offset.toString());

        const resp = await axiosConfig.get(`/api/products?${queryParams.toString()}`);
        return resp.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; // Пробрасываем ошибку для обработки в вызывающем коде
    }
};

export const fetchGenders = async (setAllGenders: (newValue: ProductGender[]) => void) => {
    try {
        const response = await axiosConfig.get('/api/products/genders')
        setAllGenders(response.data.genders as ProductGender[])
    } catch (error) {
        console.log(error)
    }
}

export const fetchProductTypes = async (setAllProductTypes: (newValue: ProductType[]) => void) => {
    try {
        const response = await axiosConfig.get('/api/products/types')
        setAllProductTypes(response.data.types as ProductType[])
    } catch (error) {
        console.log(error)
    }
}

export const fetchBrands = async (setAllBrands: (newValue: object[]) => void) => {
    try {
        const response = await axiosConfig.post('/api/products/brands', {})
        setAllBrands(response.data.brands)
    } catch (error) {
        console.log(error)
    }
}
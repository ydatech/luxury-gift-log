import type { GiftInput, PaginatedResponse } from "../types/gift";
import api from "./api"

export const getGifts = async (
    page = 1,
    search = '',
    category = '',
): Promise<PaginatedResponse> => {

    const res= await api.get('/api/gifts',{
        params: {
            page,
            limit: 5,
            search,
            category
        }
    })

    return res.data;
}

export const getGiftById = async (id: number) => {
    const res = await api.get(`/api/gifts/${id}`);
    return res.data;
}

export const createGift =  async (data: GiftInput)=>{
    return await api.post('/api/gifts', data);
}

export const updateGift = async (id: number, data: GiftInput) => {
    return await api.put(`/api/gifts/${id}`, data);
}

export const deleteGift = async (id: number) => {
    return await api.delete(`/api/gifts/${id}`);
}   

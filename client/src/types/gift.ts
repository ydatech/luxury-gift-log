export interface Gift {
    id: number;
    clientName: string;
    propertyAddress: string;
    description: string;
    category: string;
    cost: number;
    dateGiven: string;
    createdAt: string;
}

export interface GiftInput {
    clientName: string;
    propertyAddress: string;
    description: string;
    category: string;
    cost: number;
    dateGiven: string;
}

export interface PaginatedResponse {
    data: Gift[];
    meta :{
        page: number;
        limit: number;
        totalPages: number;
        total: number;
    }
}
export interface RequestBody{
    name: string;
    nickname: string;
    size: string;
    address: string;
}

export interface ProductsResponse {
    readonly id: string;
    name: string;
    nickname: string;
    size: string;
    address: string;
    created_at: string;
    image_url: string;
}
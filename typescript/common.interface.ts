export interface RequestBody{
    id?: string;
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
    tshirtType: string;
    gender: string;
}

export interface SizeChartItem {
    size: string;
    chest: number;
    waist: number;
    length: number;
}

export interface WindowSize{
    height: number | undefined;
    width: number | undefined;
}
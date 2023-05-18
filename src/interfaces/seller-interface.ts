export interface IShopListResponse {
        code: number,
        message: string,
        payload: IShopListPayload,
}

export interface IShopListPayload {
        shop: IShopInformation[],
        pageIndex: number,
        pageSize: number,
        totalPage: number,
}

export interface IShopInformation {
        id: string,
        id_user: string,
        name: string,
        address: string,
        logo: string,
}
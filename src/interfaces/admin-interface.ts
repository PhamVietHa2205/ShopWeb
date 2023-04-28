/**
 * USER
 */
export interface IAdminGetUserResponse {
    code: number,
    message: string,
    payload: {
        "users": IUserInformation[],
        "pageSize": number,
        "pageIndex": number,
        "totalPage": number,
    },
}


export interface IUserInformation {
    id: string,
    email: string,
    fullname: string,
    phone: string,
    avatar: string,
    gender: string,
    role: string,
    numberShop: number,
}
/**
 * Shop 
 */
export interface IAdminGetShopResponse {
    code: number,
    message: string,
    payload: {
        "shops": IShopInformation[],
        "pageSize": number,
        "pageIndex": number,
        "totalPage": number,
    },
}
export interface IShopInformation {
    id: string,
    id_user: string,
    name: string,
    address: string,
    logo: string,
}
/**
 * ORDER
 */
export interface IAdminGetOrderResponse {
    code: number,
    message: string,
    payload: {
        "orders": IOrderInformation[],
        "pageSize": number,
        "pageIndex": number,
        "totalPage": number,
    },
}
export interface IOrderInformation {
    id: string,
    id_buyer: string,
    status: string,
    date: string,
    payment: boolean,
    detail: IDetail[]
}
export interface IDetail {
    id: string,
    name: string,
    price: string,
    quantity: number,
}
/**
 * COMMENT
 */
export interface IAdminGetCommentResponse {
    code: number,
    message: string,
    payload: {
        "comments": ICommentInformation[],
        "pageSize": number,
        "pageIndex": number,
        "totalPage": number,
    },
}
export interface ICommentInformation {
    id: string,
    id_product: string,
    id_order: string,
    content: string,
    star: boolean,
    orderDetail: IOrderDetail[]
}
export interface IOrderDetail {
    name: string,
    id_orderDetail: string,
    id_order: string,
    id_product: number,
}
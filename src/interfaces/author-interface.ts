export interface ILoginResponse {
    code: number,
    message: string,
    payload: ILoginPayLoad,
}

export interface ILoginPayLoad {
    token: string,
    user: IUserInformation,
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

export interface IRegisterResponse {
    code: number,
    message: string,
}
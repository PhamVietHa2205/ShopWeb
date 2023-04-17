export interface ILoginResponse {
    code: number,
    message: string,
    payload: IUserInformation,
    token: string,
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
export interface BaseResponseModel<T>{
    data?:T;
    errorMessage?:string;
}
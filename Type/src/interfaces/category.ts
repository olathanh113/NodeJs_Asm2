import { Iproduct } from "./product";

export interface ICategory {
    _id?: string | number,
    name: string,
    products: Iproduct
}
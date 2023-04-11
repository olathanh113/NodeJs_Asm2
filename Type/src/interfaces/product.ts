import * as yup from "yup";
export interface Iproduct {
    _id?: string | number,
    price: number,
    name: string,
    desc: string,
    category: string,
}
export const updateSchema = yup.object({
    name: yup.string().required("Trường dữ liệu bắt buộc"),
    price: yup.number().typeError("Giá khuyến mãi phải là số").positive("Giá khuyến mãi phải là số dương").required("Trường dữ liệu bắt buộc"),
    desc: yup.string().min(10, "Tối thiếu 10 ký tự").required("Trường dữ liệu bắt buộc"),
})
export const addSchema = yup.object({
    name: yup.string().required("Trường dữ liệu bắt buộc"),
    price: yup.number().typeError("Giá khuyến mãi phải là số").positive("Giá khuyến mãi phải là số dương").required("Trường dữ liệu bắt buộc"),
    desc: yup.string().min(10, "Tối thiếu 10 ký tự").required("Trường dữ liệu bắt buộc"),
    categoryId: yup.string().required("Vui lòng chọn danh mục")
})

export type updateForm = yup.InferType<typeof updateSchema>
export type addForm = yup.InferType<typeof addSchema>
import { SigninForm, SignupForm } from "../interfaces/user";
import instance from "./instance";

export const signup = (data: SignupForm) => {
    const uri = "/signup"
    return instance.post(uri, data)
}


export const signin = (data: SigninForm) => {
    const uri = "/signin"
    return instance.post(uri, data)
}
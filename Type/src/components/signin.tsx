import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { SigninForm, signinSchema } from "../interfaces/user";
import { signin } from "../api/users";
import { useLocalStorage } from "../hooks"
const Signin = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<SigninForm>({
        resolver: yupResolver(signinSchema)
    })
    const [user, setUser] = useLocalStorage("user", null)
    const onSubmit = async (data: SigninForm) => {
        try {
            const { data: { accessToken, user } } = await signin(data)
            setUser({
                accessToken,
                ...user,
            })
            if (user.role === "admin") {
                navigate("/admin")
                alert("Đăng nhập admin thành công !")
            } else {
                navigate('/')
                alert("Đăng nhập thành công")
            }

        } catch (err) {
            alert("Thông tin tài khoản mật khẩu không chính xác")

        }

    }
    return (
        <div className="signin container row ">
            <div className="signin container row">
                <div className="form-signin col-8">
                    <form action="" id="from-user" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="form-label">Email</label>
                        <input
                            type="text"
                            placeholder="Nhập email.."
                            className="form-control"
                            {...register('email')}
                        />
                        <p className=" text-danger" style={{ fontSize: "10px" }}>
                            {errors.email && errors.email.message}
                        </p>
                        <label htmlFor="form-label">Mật khẩu</label>
                        <input
                            type="password"
                            placeholder="Password.."
                            className="form-control"
                            {...register('password')}
                        />
                        <p className=" text-danger" style={{ fontSize: "10px" }}>
                            {errors.password && errors.password.message}
                        </p>
                        <button
                            className="btn btn-primary form-control mt-4"
                            type="submit"
                        >
                            Đăng nhập
                        </button>
                    </form>
                    
                </div>
                <div className="logo col-4">
                    <Link to="/">
                        <img src="logo.png" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Signin;
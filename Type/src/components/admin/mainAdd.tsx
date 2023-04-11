import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { addForm, addSchema } from "../../interfaces/product";
import { addProduct } from "../../api/product";
import { useEffect, useState } from "react";
import { ICategory } from "../../interfaces/category";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const MainAdd = () =>{
    const navigate = useNavigate();
    const [categorys, setCategory] = useState<ICategory[]>([])
    useEffect(() => {
        axios.get("http://localhost:8080/api/categories")
            .then(({ data }) => {
                setCategory(data);
            });
    }, [])
    const { register, handleSubmit, formState: { errors } } = useForm<addForm>({
        resolver: yupResolver(addSchema)
    })
    const handleOnSubmit = async (product: addForm) => {
        try {
            const response = await addProduct(product);
            alert("Thêm sản phẩm thành công")
            navigate("/admin");
        } catch (error) {
            alert("Bạn không thể thêm sản phẩm !")
        }

    }
    return (
        <div className="col-10">
            
            <form action="" className="row row-cols-2" onSubmit={handleSubmit(handleOnSubmit)}>
                <div className="col-4">
                <br />

                </div>
                <div className="col-8">
                    
                    <h5>Thêm mới sản phẩm</h5>
                    <label htmlFor="" className="mb-3">Tên sản phẩm</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Nhập tên sản phẩm"
                        {...register("name")}
                    />
                    <p className=" text-danger" style={{ fontSize: "10px" }}>
                        {errors.name && errors.name.message}
                    </p>
                    <div className="row row-cols-1" >
                        <div>
                            <div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập giá gốc"
                                    {...register("price")}
                                />
                                <p className=" text-danger" style={{ fontSize: "10px" }}>
                                    {errors.price && errors.price.message}
                                </p>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className="mt-3 mb-3">Danh mục</label>
                            <select className="form-select" {...register("categoryId")}>
                                <option value="">Vui lòng chọn danh mục</option>
                                {categorys.map((e) => (
                                    <option key={e._id} value={e._id}>{e.name}</option>
                                ))}
                            </select>
                            <p className=" text-danger" style={{ fontSize: "10px" }}>
                                {errors.categoryId && errors.categoryId.message}
                            </p>
                        </div>
                    </div>
                    <label htmlFor="" className="mb-2 mt-5">Thêm ảnh</label>
                    <input
                        type="file"
                        className="form-control"
                        id="product-img"

                    />
                    <label htmlFor="" className="mt-2 mb-3">Mô tả</label>
                    <textarea className="form-control"   {...register("desc")} placeholder="Nhập mô tả sản phẩm"></textarea>
                    <p className=" text-danger" style={{ fontSize: "10px" }}>
                        {errors.desc && errors.desc.message}
                    </p>
                    <button onSubmit={()=>{handleSubmit()}} className="btn btn-primary mt-3">Thêm mới</button>
                </div>

            </form >
        </div >
    )
   
    
}

export default MainAdd;
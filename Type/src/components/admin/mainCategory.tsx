import axios from "axios";
import { useEffect, useState } from "react";
import { Iproduct } from "../../interfaces/product";
import { Link } from "react-router-dom";
import { ICategory } from "../../interfaces/category";


const MainCategory  = () =>{
        const [products, setProducts] = useState<Iproduct[]>([])
        
        useEffect(()=>{
            axios.get("http://localhost:8080/api/products")
            .then(({data})=>{
                setProducts(data)
            })
        },[])

        const handleRemoveProduct = (id: string | number) =>{

            axios.delete(`http://localhost:8080/api/products/${id}`)
            .then((response)=>{
                const change = window.confirm("You Should Remove ?")
                if(change){
                    const newData = products.filter((product) => product._id !== id)
                    setProducts(newData)
                }
            })
            .catch((error) => {
                console.log(error);
            });
    
    
        }

        return <div className="col-9 pt-5">
        <h3>Điện thoại</h3>
        <div>
            <div className="d-flex gap-3 mb-5">
                <p className="mt-4">Bộ lọc :</p>
                <div>
                    <p>Danh mục sản phẩm</p>
                    <select name="" id="" className="form-select">
                        <option value="">Điện thoại</option>
                        <option value="">Máy tính</option>
                        <option value="">Laptop</option>
                        <option value="">ÂM thanh</option>
                    </select>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Thành tiền</th>
                        <th>Mô tả</th>
                        <th>Ẩn hiện</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product,index)=>{
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.desc}</td>
                                <td></td>
                                <td>
                                    <button onClick={()=>{handleRemoveProduct(product._id)}} className="btn btn-primary me-2">Xóa</button>
                                    <Link to={`updateproduct/${product._id}`} className="btn btn-primary">Sửa</Link>
                                </td>
                            </tr>

                        )

                    })}
                    
                </tbody>
            </table>
        </div>
        <Link to="/admin/addproduct" className="btn btn-primary mt-2 ">Thêm mới sản phẩm</Link>
    </div>
}
export default MainCategory
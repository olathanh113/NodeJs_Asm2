import { useState, useEffect } from "react";
import Product from "../components/product";
import { Iproduct } from "../interfaces/product";
import axios from "axios";

const HomePage = () => {

    const [products, setProducts] = useState<Iproduct[]>([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/api/products")
            .then(({data})=>setProducts(data)) 
    },[])
    return <div>
        <h2 className="p-5">ĐIỆN THOẠI NỔI BẬT NHẤT</h2>
        <div className="row row-cols-6 p-5">
                {products.map(product => <Product
                    key ={product._id}
                    data={product}
                    
            />)}
            
        </div>
    </div>
}
export default HomePage;
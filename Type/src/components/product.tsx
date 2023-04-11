import { Iproduct } from "../interfaces/product";

type prop = {
    data:Iproduct
}
const Product = ({ data }:prop) => {
    return <div>

        <a href={`/deltail-product/${data._id}`}><img src="./product1.png" alt="" /></a>
        <div className="infoProduct mb-4">
            <a href="/deltail-product" className="text-decoration-none text-dark"><p className="fs-5 g-col-4 mb-3">{data.name}</p></a>
            <span className="text-danger mb-5">{data.price}</span> <span className="mb-5">15.000.000đ</span> <br />
            <span className="text-*10px fs-5 ">&#9733;&#9733;&#9733;&#9733;&#9733;</span><span text-sm> 16 lượt đánh giá</span>
        </div>

    </div>
}
export default Product;
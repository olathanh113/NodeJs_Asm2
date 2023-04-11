const HeaderCart = () => {
    return <header >
        <div className=" bg-danger align-items-center d-flex" style={{ height: "70px" }} >
            <a href="/"> <img src="./logo.png" width={50} alt="logo" style={{ marginRight: "100px", marginLeft: "200px" }} /></a>
            <input type="text" placeholder="Search" style={{ minWidth:"650px", marginRight: "100px" }} className="form-control flex-fill g-col-6" />
            {
                <section className="row row-cols-4  text-light mt-1 ms-1" style={{ width: "600px" }}>
                <div className="">
                    <p>Gọi mua hàng <br /> 1800 2222</p>
                </div>
                <div className="flex">
                    <span className="material-symbols-outlined fs-1">pin_drop</span>
                    <p>Cửa hàng gần bạn</p>
                </div>
                <div className="flex">
                    <span className="material-symbols-outlined fs-1">local_shipping</span>
                    <p>Tra cứu đơn hàng</p>
                </div>
                <div className="flex ">
                    <span className="material-symbols-outlined fs-1">shopping_cart</span>
                    <p>giỏ hàng</p>
                </div>
            </section>
            }
        </div>
    </header>
}
export default HeaderCart;
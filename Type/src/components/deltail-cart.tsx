const DeltailCart = () => {
    return (
        <div className="Cart-deltail">
            <section className="row row-cols-2 text-danger fs-5 pt-5">
                <div className="flex back " style={{ height: "30" }}>
                    <span className="material-symbols-outlined text-dark ">arrow_back_ios</span> <span className="back-item">Trở về</span>
                </div>
                <p>Giỏ hàng</p>
            </section>
            <section className="row row-cols-2 p-5 ">
                <img src="./samsung.png" alt="product" width={200} height={350} />
                <section>
                    <h6>Samsung Galaxy S22-Đen</h6>
                    <div className="d-flex gap-2  ">
                        <p className="text-danger mt-1">16.000.00Đ</p>
                        <span className="text-decoration-line-through mt-1">21.999.999</span>
                        <p className="btn btn-danger">Giam 27%</p>
                    </div>
                    <span>Số lượng <input type="number" min={0} max={1000} step={1} /></span>
                    <div className="bg-light mt-3">
                        <p>- Chương trình khuyến mại:</p>
                        <p>Dịch vụ phòng chờ hạng thương gia tại sân bay</p>
                        <p>Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)</p>
                    </div>
                </section>
            </section>
            <img src="/Vector.png" alt="" className="cart-icon-delete" />
            <hr />
            <section className="">
                <div className="d-flex justify-content-evenly"> <p>Tổng tiền tạm tính</p> <p>17.000.000đ</p></div>
                <div className="d-flex flex-column" style={{ width: "500px", margin: "auto" }}>
                    <button className="btn btn-danger">Tiến hành đặt hàng</button>
                    <button className="btn btn-danger mt-2 mb-5">Chọn thêm sản phẩm khác</button>
                </div>
            </section>
        </div>
    )
}
export default DeltailCart;
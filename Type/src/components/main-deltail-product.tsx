import Menu from "./Menu";
import DelTailProduct from "./deltail-product";
import Footer from "./footer";
import HeaderPage from "./header";
import { Outlet } from "react-router-dom";
const MainDeltailProduct = () => {
    return (
        <div className="container-fluid">
            <HeaderPage />
            <Menu />
            <Outlet />
            <DelTailProduct />
            <Footer />
        </div>

    )
}
export default MainDeltailProduct;
import HeaderPage from "./header";
import { Outlet } from "react-router-dom"
import Slider from "./slider";
import Footer from "./footer";
const Layout = () => {
    return <div className="container-xxl">
        <HeaderPage />
        <Slider />
        <Outlet />
        <Footer />
    </div>
}
export default Layout;
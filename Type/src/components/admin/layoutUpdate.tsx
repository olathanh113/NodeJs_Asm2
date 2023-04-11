import Header from "./header";
import UpdateProduct from "./mainUpdate";
import { Link, Outlet } from "react-router-dom";

const AdminUpdate = () => {
    return (
        <div>
            <Header/>
            <div className="">
                <Link to="/admin" className="fs-2 text-danger ">Trở lại</Link>
                <Outlet />
                <UpdateProduct/>
            </div>
        </div>
    )
}
export default AdminUpdate;
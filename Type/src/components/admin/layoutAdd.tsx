import Header from "./header";
import Sidebar from "./sidebar";
import MainAdd from "./mainAdd";

const AdminProduct = () => {
    return(
        <div>
            <Header />
            <div className="row row-cols-3">
                <MainAdd />
            </div>
        </div>
    )
}
export default AdminProduct;
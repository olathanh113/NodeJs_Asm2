import Header from "./header";
import Sidebar from "./sidebar";
import MainCategory from "./mainCategory";


const AdminProduct = () => {
    return <div className="container-xxl">
        <Header/>
        <div className="row row-cols-2">
            <Sidebar/>
            <MainCategory />
        </div>
    </div>
}
export default AdminProduct;
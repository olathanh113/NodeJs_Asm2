import Header from "./header";
import MainUser from "./mainUser";
import Sidebar from "./sidebar";


const AdminUser = () => {
    return(
        <div>
            <Header />
            <div className="row row-cols-3">
                <Sidebar />
               <MainUser/>
            </div>
        </div>
    )
}
export default AdminUser;
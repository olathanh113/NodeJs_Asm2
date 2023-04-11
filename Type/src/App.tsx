
import { Route, Routes, BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/home";
import Layout from "./components/layout";
import Signup from "./components/signup";
import Signin from "./components/signin";
import MainDeltailProduct from "./components/main-deltail-product";
import Cart from "./pages/cart";
import Admin from "./components/admin/layout";
import AdminProduct from "./components/admin/layoutAdd";
import AdminUser from "./components/admin/layoutUser";
import AdminUpdate from "./components/admin/layoutUpdate";

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/deltail-product/:id" element={<MainDeltailProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={< Admin/>} />
      <Route path="/admin/addproduct" element={< AdminProduct/>} />
      <Route path="/admin/user" element={< AdminUser/>} />
      <Route path="/admin/updateproduct/:id" element={< AdminUpdate/>} />

      
    </Routes>
  </BrowserRouter>

}

export default App

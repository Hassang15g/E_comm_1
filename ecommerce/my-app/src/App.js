import Footer from "./Components/Uitily/Footer";
import NavBarLogin from "./Components/Uitily/NavBarLogin";
import LoginPage from "./Page/Auth/LoginPage";
import RegisterPage from "./Page/Auth/RegisterPage";
import AllBrand from "./Page/Brand/AllBrandPage";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import HomePage from "./Page/Home/HomePage";
import {BrowserRouter, Routes , Route} from "react-router-dom"
import ShopProductsPage from "./Page/Products/ShopProductsPage";

function App() {
  return (
    <div className="font">
    <NavBarLogin/>

      <BrowserRouter>
        <Routes>
          <Route index element={   <HomePage/>} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/allcategory" element={<AllCategoryPage/>}/>
          <Route path="/allbrand" element={<AllBrand/>}/>
          <Route path="/products" element={<ShopProductsPage/>}/>
        </Routes>
      </BrowserRouter>
      
      <Footer/>

    </div>
  );
}

export default App;

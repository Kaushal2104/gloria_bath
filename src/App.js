import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import hlogo from "../src/asset/image/logo/logo.png";
import flogo from "../src/asset/image/logo/logoWhite.png";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import ProductPage from "./component/ProductPage";
import SingleProduct from "./component/SinglePage";
// import Header2 from "./component/Header2";
import ContactUs from "./component/ContactUs";
import CatagoryPage from "./component/CatagoryPage";
import BlogPage from "./component/BlogPage";
import AboutusPage from "./component/AboutusPage";
import PageNotFound from "./component/PageNotFound";
import SingleBlog from "./component/SingleBlog";
import Admin from "./component/admin/Admin";
import Users from "./component/admin/users/Users";
import Products from "./component/admin/products/Products";
import Blog from "./component/admin/blog/Blog";
import Contact from "./component/admin/contacts/Contact";
import AddProduct from "./component/admin/products/AddProduct";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header logo={hlogo} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/singleBlog" element={<SingleBlog />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
          <Route path={"/contact"} element={<ContactUs />} />
          <Route path="catagory" element={<CatagoryPage />} />
          <Route path="/about" element={<AboutusPage />} />
          {/* <Route path="/admin/" element={<Admin />}>
            <Route path="user" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Route> */}
          <Route path={"*"} element={<PageNotFound />} />
        </Routes>
        <Footer logo={flogo} />
      </BrowserRouter>
    </>
  );
}

export default App;

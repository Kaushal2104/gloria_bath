import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import hlogo from "../src/asset/image/logo/logo.png";
import flogo from "../src/asset/image/logo/logoWhite.png";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Product from "./component/Product";
import SingleProduct from "./component/SingleProduct";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header logo={hlogo} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="/singleproduct" element={<SingleProduct/>} />
        </Routes>
        <Footer logo={flogo} />
      </BrowserRouter>
    </>
  );
}

export default App;

import Home from "./pages/Home";

import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";

import Cart from "./pages/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./store/index";
import MansProducts from "./pages/MansProducts/MansProducts";
import WomansProducts from "./pages/WomansProducts/WomansProducts";
import Accessories from "./pages/Accessories/Accessories";
import LoungeWear from "./pages/LoungeWear/LoungeWear";
import SummerWear from "./pages/SummerWear/SummerWear";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/productList" element={<ProductList />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/products/:id" element={<Product />}></Route>
          <Route
            path="/mansproducts"
            element={<MansProducts></MansProducts>}
          ></Route>
          <Route
            path="/womansproducts"
            element={<WomansProducts></WomansProducts>}
          ></Route>
          <Route
            path="/accessories"
            element={<Accessories></Accessories>}
          ></Route>
          <Route path="/loungeWear" element={<LoungeWear></LoungeWear>}></Route>
          <Route path="/summerWear" element={<SummerWear></SummerWear>}></Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

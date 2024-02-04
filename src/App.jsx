import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import ShopPage from "./Pages/ShopPage.jsx";
import CategoryPage from "./Pages/CategoryPage.jsx";
import SingleProductPage from "./Pages/SingleProductPage.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar></Navbar>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
            <Route
              path="/product/:id"
              element={<SingleProductPage></SingleProductPage>}
            ></Route>
            <Route
              path="/category/:category"
              element={<CategoryPage></CategoryPage>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shop_page/shopPageSlice";
import categoryReducer from "../features/category_Page/categoryPageSlice";
import productReducer from "../features/single_product_page/singleProductSlice";
import cartReducer from "../features/cart/cartSlice";

export default configureStore({
  reducer: {
    shop: shopReducer,
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

import Login from "./Page/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Page/SignUp";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Cart from "./Page/Cart";
import WishList from "./Page/WishList";
import CheckOut from "./Page/CheckOut";
import OrderConfrim from "./Page/OrderConfrim";
import OrderDetails from "./Page/OrderDetails";
import OrderHistory from "./Page/OrderHistory";
import ProductDetails from "./Page/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/AddToCart" element={<ProductDetails />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<WishList />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/orderConfrim" element={<OrderConfrim />} />
        <Route path="/orderDetails" element={<OrderDetails />} />
        <Route path="/orderHistory" element={<OrderHistory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

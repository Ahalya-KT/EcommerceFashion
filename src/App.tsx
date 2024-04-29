import Login from "./Page/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Page/SignUp";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Navbar from "./component/Navbar";
import AddToCart from "./Page/AddToCart";
import Footer from "./component/Footer";
import Cart from "./Page/Cart";
import WishList from "./Page/WishList";

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
        <Route path="/AddToCart" element={<AddToCart />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<WishList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

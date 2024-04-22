import Login from "./Page/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Page/SignUp";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

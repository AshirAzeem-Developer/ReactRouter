import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../Screens/About";
import Home from "../Screens/Home";
import Services from "../Screens/Services";
import ContactUs from "../Screens/ContactUs";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/home">Home Page</Link>
          <Link to="/About">About Page</Link>
          <Link to="/Services">Services</Link>
          <Link to="/ContactUs">Contact Us</Link>
        </nav>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

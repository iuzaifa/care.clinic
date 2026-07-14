import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteLayout from "../layouts/WebsiteLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Departments from "../pages/Departments";
import Doctors from "../pages/Doctors";
import Pricing from "../pages/Pricing";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Website */}
          <Route element={<WebsiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contact" element={<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;

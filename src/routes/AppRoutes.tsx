import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteLayout from "../layouts/WebsiteLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Doctors from "../pages/Doctors";
import Pricing from "../pages/Pricing";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import PageNotFound from "../pages/PageNotFound";
import Services from "../pages/Services";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Website */}
          <Route element={<WebsiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<PageNotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;

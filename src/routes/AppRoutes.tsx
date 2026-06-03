import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteLayout from "../layouts/WebsiteLayout";
import Home from "../pages/website/pages/Home";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/pages/Dashboard";
import Doctors from "../pages/admin/pages/Doctors";
import About from "../pages/website/pages/About";
import Departments from "../pages/website/pages/Departments";
import Gallery from "../pages/website/pages/Gallery";
import Pricing from "../pages/website/pages/Pricing";
import Blog from "../pages/website/pages/Blog";
import Contact from "../pages/website/pages/Contact";


function AppRoutes () {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* Public Website */}
                    <Route element={<WebsiteLayout/>}>
                        <Route path="/" element={<Home />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/departments" element={<Departments />}/>
                        <Route path="/doctors" element={<Doctors />}/>
                        <Route path="/gallery" element={<Gallery />}/>
                        <Route path="/pricing" element={<Pricing />}/>
                        <Route path="/blog" element={<Blog />}/>
                        <Route path="/contact" element={<Contact />}/>
                        
                    </Route>

                     {/* Admin Panel */}
                    <Route element={<AdminLayout />}>
                        <Route path="/admin/dashboard" element={<Dashboard />} />
                        <Route path="/admin/doctors" element={<Doctors />} />
                    </Route>

                </Routes>
            
            </BrowserRouter>

        </>
    )

}

export default AppRoutes;
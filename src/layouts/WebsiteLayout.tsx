import { Outlet } from "react-router-dom";
import Header from "../pages/website/components/Header";
import Footer from "../pages/website/components/footer/Footer";


const WebsiteLayout = () => {
  return (
    <>
        <Header/>
        <main className="pt-16">
          <Outlet/>
        </main>
        <Footer/>
    </>
  )
}


export default WebsiteLayout;
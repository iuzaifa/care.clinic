import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/sections/Footer";

const WebsiteLayout = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default WebsiteLayout;

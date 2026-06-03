import { Outlet } from "react-router-dom";
import Sidebar from "../pages/admin/components/Sidebar";


const AdminLayout = () => {
  return (
    <>
      <div className="admin-layout">
        <Sidebar/>
        <div className="content">
          <main>
            <Outlet/>
          </main>

        </div>
        

      </div>
    </>
  )
}

export default AdminLayout;
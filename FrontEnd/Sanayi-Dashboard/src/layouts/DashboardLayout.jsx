import Sidebar from "../components/dashboard/Sidebar.jsx";
import TopNav from "../components/dashboard/TopNav.jsx";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <section className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <TopNav />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </section>
  );
};
export default DashboardLayout;

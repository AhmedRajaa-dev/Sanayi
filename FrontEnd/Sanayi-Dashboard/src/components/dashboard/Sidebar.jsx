import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { menuItems } from "../../utils/Constants.jsx";
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`${isCollapsed ? "w-20" : "w-64"} bg-slate-900 text-white h-screen sticky top-0 transition-all duration-300 flex flex-col`}
    >
      <div className="p-6 text-2xl font-bold border-b border-slate-800 flex items-center justify-between">
        {!isCollapsed && <span>Dashboard</span>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="cursor-pointer"
        >
          <Menu />
        </button>
      </div>

      <nav className="mt-6 px-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition"
          >
            {item.icon}
            {!isCollapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
export default Sidebar;

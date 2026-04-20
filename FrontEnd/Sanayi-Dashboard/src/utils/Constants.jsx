import { Users, LayoutDashboard, SendToBack } from "lucide-react";

export const menuItems = [
  { name: "Home", path: "/dashboard", icon: <LayoutDashboard /> },
  { name: "Users", path: "/dashboard/users", icon: <Users /> },
  { name: "Orders", path: "/dashboard/Orders", icon: <SendToBack /> },
];

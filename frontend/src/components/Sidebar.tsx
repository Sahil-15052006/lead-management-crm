import { LayoutDashboardIcon, BarChart3 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UsersIcon } from "lucide-react";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboardIcon, path: "/" },
    { id: "leads", label: "Leads", icon: UsersIcon, path: "/leads" },
    { id: "analytics", label: "Analytics", icon: BarChart3, path: "/analytics" },
  ];

  return (
    <div className="w-10 lg:w-64 h-full border-r border-(--border)/50 bg-(--surface) text-(--text-secondary) font-medium shadow-sm">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;

        return (
          <Link
            key={item.id}
            onClick={() => setActiveTab(item.id)
            }
            to={item.path}
            className={`${isActive
              ? 'text-(--primary) bg-linear-to-r from-(--primary)/10 to-(--primary)/5 font-semibold border-l-2 border-l-(--primary) shadow-sm'
              : 'text-(--text-secondary) hover:text-(--text) hover:bg-(--bg) border-l-2 border-l-transparent'
              } flex items-center gap-3 p-2 lg:p-4 cursor-pointer duration-200 transition-all border-b border-(--border)/30 relative group`}
          >
            <Icon className={`w-5 h-5 shrink-0 transition-all duration-300 ${isActive ? 'text-(--primary)' : 'group-hover:text-(--primary)'}`} />
            <span className="hidden lg:inline flex-1">{item.label}</span>
            {isActive && <div className="block w-1 h-1 rounded-full bg-(--primary) ml-auto"></div>}
          </Link>
        );
      })}
    </div>
  );
}

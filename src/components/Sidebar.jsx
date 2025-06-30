import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Info,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Plane,
  Settings,
  Users,
  BarChart3,
  MapPin,
  Bell,
  LogOut,
} from "lucide-react";
import logo from "../assets/logo.avif";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile && open) {
        setOpen(true);
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, [open]);

  useEffect(() => {
    if (isMobile && open) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMobile, open]);

  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/home", badge: null },
    { name: "Avi-Green", icon: Plane, path: "/green", badge: null },
    { name: "DaaS", icon: BarChart3, path: "/daas", badge: null },
    { name: "Map View", icon: MapPin, path: "/map", badge: null },
    { name: "Drone Operation", icon: Users, path: "/drone-operation", badge: null },
    { name: "Operator Management", icon: Bell, path: "/operator-management", badge: null },
    { name: "Settings", icon: Settings, path: "/settings", badge: null },
    { name: "About", icon: Info, path: "/about", badge: null },
  ];

  const toggleSidebar = () => {
    setOpen(!open);
    console.log(open, "open");
  };

  const closeSidebar = () => {
    setOpen(false);
  };

  return (
    <>
      {isMobile && !open && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-[60] lg:hidden bg-white shadow-lg text-gray-800 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-gray-200"
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>
      )}

      {isMobile && (
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 z-[45] lg:hidden ${
            open
              ? "opacity-50 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={closeSidebar}
        />
      )}

      <div
        className={`
          ${
            isMobile
              ? `fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out z-50 ${
                  open ? "translate-x-0" : "-translate-x-full"
                }`
              : `relative bg-gray-900 text-white h-screen transition-all duration-300 ease-in-out ${
                  open ? "w-64" : "w-16"
                }`
          }
        `}
      >
        {isMobile && (
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-[#3D9BE9]">
            <div className="flex items-center gap-3">
              {/* <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <Plane size={20} className="text-white" />
              </div> */}
              <div className="flex justify-center items-center">
                <img src={logo} className="w-[200px] h-[40]" />
              </div>
            </div>
            <button
              onClick={closeSidebar}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>
        )}

        {!isMobile && (
          <button
            className="absolute -right-3 top-9 w-7 h-7 bg-white text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center border border-gray-200"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            {open ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
          </button>
        )}

        {!isMobile && (
          <div
            className={`flex items-center gap-3 p-5 pt-8 ${
              !open ? "justify-center" : ""
            }`}
          >
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Plane size={20} className="text-white" />
            </div>
            {open && (
              <div className="flex justify-center items-center">
                <img src={logo} className="w-[200px] h-[40]" />
              </div>
            )}
          </div>
        )}

        <nav className={`flex flex-col mt-6 ${isMobile ? "px-4" : "px-3"}`}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={isMobile ? closeSidebar : undefined}
                className={`
                  flex items-center gap-4 p-3 rounded-xl mb-1 transition-all duration-200 group relative
                  ${
                    isMobile
                      ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 last:border-b-0"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }
                  ${!open && !isMobile ? "justify-center" : ""}
                `}
                title={!open && !isMobile ? item.name : ""}
              >
                <div className="relative">
                  <Icon
                    size={22}
                    className="flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  {item.badge && (open || isMobile) && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                      {item.badge}
                    </span>
                  )}
                </div>

                {(open || isMobile) && (
                  <div className="flex items-center justify-between flex-1">
                    <span className="font-medium text-sm">{item.name}</span>
                    {item.badge && !isMobile && (
                      <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 font-medium">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}

                {!open && !isMobile && (
                  <div className="absolute left-16 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-lg border border-gray-700">
                    {item.name}
                    {item.badge && (
                      <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {isMobile && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-white">JD</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">John Doe</p>
                <p className="text-xs text-gray-600">Administrator</p>
              </div>
            </div>
            <button className="flex items-center gap-3 w-full p-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors">
              <LogOut size={18} />
              <span className="text-sm font-medium">Sign Out</span>
            </button>
          </div>
        )}

        {!isMobile && (
          <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-gray-700">
            <div
              className={`flex items-center gap-3 p-3 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer group
              ${!open ? "justify-center" : ""}
            `}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-white">JD</span>
              </div>
              {open && (
                <div className="flex flex-col flex-1">
                  <span className="text-sm font-medium text-white">
                    John Doe
                  </span>
                  <span className="text-xs text-gray-400">Administrator</span>
                </div>
              )}
              {!open && (
                <div className="absolute left-16 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-lg border border-gray-700">
                  John Doe
                  <br />
                  <span className="text-xs text-gray-400">Administrator</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;

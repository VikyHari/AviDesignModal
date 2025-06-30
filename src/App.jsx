// src/App.jsx
import React from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


const AppContent = () => {
  const location = useLocation();

  const hideSidebarPaths = ["/login","/"];
  const shouldHideSidebar = hideSidebarPaths.includes(location.pathname);

  return (
    <div className="flex h-screen overflow-hidden">
      {!shouldHideSidebar && <Sidebar />}

      <div className="flex-1 h-full overflow-y-auto bg-gray-100" style={{zIndex:""}}>
        <AppRoutes />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
      <ToastContainer/>
    </BrowserRouter>
  );
};

export default App;

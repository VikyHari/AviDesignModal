// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Green from '../pages/Green';
import DaaS from '../pages/DaaS';
import Profile from '../pages/Profile';
import Map from '../components/Map';
import DroneOperationsPage from '../pages/DroneOperationsPage';
import OperatorManagement from '../pages/OperatorManagement';
import DaaSSkeletonLoader from '../components/Skeleton';

const AppRoutes = () => {
  return (
    <Routes>
      {/* ✅ Make Login page default */}
      <Route path="/" element={<Login />} />

      {/* Other pages under PageLayout */}
      <Route element={<PageLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/green" element={<Green />} />
        <Route path="/daas" element={<DaaS />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/map" element={<Map />} />
        <Route path="/drone-operation" element={<DroneOperationsPage />} />
        <Route path="/operator-management" element={<OperatorManagement />} />
      </Route>

      {/* Optional: keep /login route accessible directly */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;

// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Green from '../pages/Green';
import DaaS from '../pages/DaaS';

const AppRoutes = () => {
  return (
   <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/green" element={<Green />} />
        <Route path="/daas" element={<DaaS />} />


      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;

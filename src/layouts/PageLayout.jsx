// src/layouts/PageLayout.jsx
import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const PageLayout = () => {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
        <ToastContainer />
      </main>
    </>
  );
};

export default PageLayout;

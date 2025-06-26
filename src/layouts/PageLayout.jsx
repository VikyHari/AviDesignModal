// src/layouts/PageLayout.jsx
import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const PageLayout = () => {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
    </>
  );
};

export default PageLayout;

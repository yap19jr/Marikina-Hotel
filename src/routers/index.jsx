import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';

const IndexRouter = () => {
  return (
    <>
        <NavBar />
        <Outlet />
        <Footer/>

    </>
  )
}

export default IndexRouter
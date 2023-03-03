import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';

const IndexRouter = () => {
  return (
    <>
        <NavBar />
        <Outlet />
    </>
  )
}

export default IndexRouter
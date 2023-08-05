import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Navbar/Nav';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
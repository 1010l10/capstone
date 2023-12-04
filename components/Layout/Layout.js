import React, { useState } from 'react';
import BackToTop from '../elements/BackToTop';

import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    const [openClass, setOpenClass] = useState('');

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-active");
        setOpenClass("sidebar-visible")
    }

    const handleRemove = () => {
        if (openClass === "sidebar-visible") {
            setOpenClass("")
            document.body.classList.remove("mobile-menu-active");
        }
    }
    return (
        <>
            <div className="body-overlay-1" onClick={handleRemove} />
            
            <Sidebar openClass={openClass} />
            <main className="main">
                {children}
            </main>
         
            <BackToTop />
        </>
    );
};

export default Layout;

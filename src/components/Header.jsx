import React from 'react';
import logo from "../img/soldadorheader.jpg";

function Header() {
    return (
        <div className="relative bg-gray-900">
            <img src={logo} alt="Logo" className="w-full max-w-screen-xl h-auto mx-auto" style={{ maxWidth: '90%', maxHeight: '54vh' }} />
        </div>
    );
}

export default Header;

import React, { useState } from 'react';
import Desktop_Header from './sub-headers/desktop-header'
import Mobile_Header from './sub-headers/mobile-header'

const Header = () => {

  return (
    <div className="header">
        <div className="header_content">
            < Desktop_Header />
            <Mobile_Header />
        </div>
    </div>
  );
}

export default Header;
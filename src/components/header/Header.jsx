import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
        <a href="/" className='home-btn'>News Now</a>
        <nav className="nav">
        <a href="/technology">Technology</a>
        <a href="/sports">Sports</a>
        <a href="/entertainment">Entertainment</a>
        <a href="/health">Health</a>
        <a href="/science">Science</a>
        </nav>
        <input type="text" placeholder='Search news...' className='search-bar' />
    </div>
  );
}

export default Header;
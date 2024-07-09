import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">intract.</div>
        <ul className="nav-items">
          <li className="nav-item">Compass</li>
          <li className="nav-item">Explore</li>
          <li className="nav-item active">Academy <span className="new-badge">New</span></li>
          <li className="nav-item">NFTs</li>
          <li className="nav-item">For Projects</li>
        </ul>
        <div className="search-container">
          <input type="text" placeholder="Search for ecosystems, trending quests etc,." className="search-input" />
        </div>
        <button className="sign-in-button">Sign In</button>
      </nav>
    </header>
  );
}

export default Header;

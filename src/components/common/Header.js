import React from 'react';

const Header = () => (
  <header className="app-header">
    <div className="app-header__logo">
      <i className="icon-play" />
      <h1>Logo here</h1>
    </div>

    <div className="app-header__right-side">
      <div className="youtube-search">
        <i className="icon-youtube2" />
        <form>
          <input type="text" placeholder="Search here..." />
          <button>
            <i className="icon-search" />
          </button>
        </form>
      </div>
    </div>
  </header>
);

export default Header;

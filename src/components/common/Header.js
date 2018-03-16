import React from 'react';
import YoutubeSearch from '../youtube-search/YoutubeSearch';

const Header = () => (
  <header className="app-header">
    <div className="app-header__logo">
      <i className="icon-play" />
      <h1>Logo here</h1>
    </div>

    <div className="app-header__right-side">
      <YoutubeSearch />
    </div>
  </header>
);

export default Header;

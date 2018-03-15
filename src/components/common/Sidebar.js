import React from 'react';

const Sidebar = () => (
  <aside className="app-main__sidebar">
    <nav className="sidebar-nav">
      <ul>
        <li className="sidebar-menu__group">
          <a href="/" className="sidebar-menu__group-title active-menu">
            <i className="icon-file-music" /> Ministério Jovem
          </a>
          <ul className="menu__group-list">
            <li>
              <a href="/">
                <i className="icon-cd" /> 2015 - Eu sou a mensagem
              </a>
            </li>
            <li>
              <a href="/">
                <i className="icon-cd" /> 2015 - Eu sou a mensagem
              </a>
            </li>
          </ul>
        </li>

        <li className="sidebar-menu__group active-menu-group">
          <a href="/" className="sidebar-menu__group-title">
            <i className="icon-file-music" /> Ministério Jovem
          </a>
          <ul className="menu__group-list">
            <li>
              <a href="/" className="active-menu-item">
                <i className="icon-cd" /> 2015 - Eu sou a mensagem
              </a>
            </li>
            <li>
              <a href="/">
                <i className="icon-cd" /> 2015 - Eu sou a mensagem
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;

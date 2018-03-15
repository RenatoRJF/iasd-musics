import React from 'react';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Content from './components/common/Content';

const App = () => (
  <div className="app-container">
    <Header />
    <main className="app-main">
      <Sidebar />
      <Content />
    </main>
  </div>
);

export default App;

import React from 'react';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Content from './components/common/Content';
import Footer from './components/common/Footer';

const App = () => (
  <div className="app-container">
    <Header />
    <main className="app-main">
      <Sidebar />
      <Content />
    </main>
    <Footer />
  </div>
);

export default App;

import React from 'react';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Content from './components/common/Content';
import Footer from './components/common/Footer';
import ContentBox from './components/common/ContentBox';
import AlbumsList from './components/albums-list/AlbumsList';

const App = () => (
  <div className="app-container">
    <Header />
    <main className="app-main">
      <Sidebar />
      <Content>
        <ContentBox>
          <AlbumsList />
        </ContentBox>
      </Content>
    </main>
    <Footer />
  </div>
);

export default App;

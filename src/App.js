import React from 'react';
import Header from './components/common/Header';

const App = () => (
  <div className="app-container">
    <Header />
    <main className="app-main">
      <aside className="app-main__sidebar">
        aside
      </aside>

      <section className="app-main__content">
        content
      </section>
    </main>
  </div>
);

export default App;

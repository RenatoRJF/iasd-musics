import React from 'react';

const App = () => (
  <div className="app-container">
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

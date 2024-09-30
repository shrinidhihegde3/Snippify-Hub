import React from 'react';
import './gridFlex.css';

const GridFlex = () => {
  return (
    <div className="grid-container">
      <header>
        <h1>Responsive Grid & Flex Layout</h1>
      </header>

      <aside>
        <h2>Sidebar</h2>
        <p>Some sidebar content</p>
      </aside>

      <main>
        <h2>Main Content</h2>
        <div className="main-content">
          <div className="box">Box 1</div>
          <div className="box">Box 2</div>
          <div className="box">Box 3</div>
          <div className="box">Box 4</div>
        </div>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default GridFlex;

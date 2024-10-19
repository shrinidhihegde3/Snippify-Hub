import React from 'react';
import './ResponsiveLayout.css'; // Importing the CSS file for the styles

const ResponsiveLayout: React.FC = () => {
  return (
    <div className="container">
      <header className="header">Header</header>
      <nav className="nav">Navigation</nav>
      <main className="main">Main Content</main>
      <aside className="aside">Sidebar</aside>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default ResponsiveLayout;

// import React from 'react';
// import './NavBar.css';

// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">ML models</div>
//       <div className="navbar-links">
//         <a href="#">Home</a>
//         <a href="#">About</a>
//         <a href="#">Contact Us</a>
//         <a href="#">Projects</a>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">ML models</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
};

export default NavBar;


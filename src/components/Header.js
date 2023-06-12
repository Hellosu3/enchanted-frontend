import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

function Header() {
  const weddingDate = new Date('2023-09-30');
  const currentDate = new Date();
  const remainingDays = Math.ceil((weddingDate - currentDate) / (1000 * 60 * 60 * 24));

  const [daysRemaining, setDaysRemaining] = useState(remainingDays);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = new Date();
      const newRemainingDays = Math.ceil((weddingDate - newDate) / (1000 * 60 * 60 * 24));
      setDaysRemaining(newRemainingDays);
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <div className="title-header">
      <h1>Tiago &amp; Sue</h1>
      <img src="https://i.imgur.com/3v72CwZ.png" alt="Image" className="header-image" /> {/* Add the image */}
      <h2>09.30.23 | Los Angeles, CA</h2>
      <h3>{daysRemaining} DAYS TO GO!</h3>
      <hr className="header-divider" /> {/* Horizontal rule above the navigation */}
      <nav>
        <ul className="header-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ourstory">Our Story</Link>
          </li>
          <li>
            <Link to="/weddingparty">Wedding Party</Link>
          </li>
          <li>
            <Link to="/guestbook">Guestbook</Link>
          </li>
        </ul>
      </nav>
      <hr className="header-divider" /> {/* Horizontal rule below the navigation */}
    </div>
  );
}
export default Header;



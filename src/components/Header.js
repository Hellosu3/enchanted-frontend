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
  

  const [showSeventhPlace, setShowSeventhPlace] = useState(false);

  const toggleSeventhPlace = () => {
    setShowSeventhPlace(!showSeventhPlace);
  };

  const seventhPlaceImage = 'https://i.imgur.com/dC4B6U2.jpg';
  const seventhPlaceAddress = ' 802 Mateo St, Los Angeles, CA 90021';




  return (
    <div className="title-header">
      <h1>Tiago &amp; Sue </h1>
      <h1>
      <Link to="#" onClick={toggleSeventhPlace} className="seventh-place-link">
        <span className="seventh-place-text">Seventh Place</span>
        <span className="seventh-place-underline"></span>
        </Link>
          </h1>
        {showSeventhPlace && (
        <div className="seventh-place-details">
          <div className="seventh-place-photo-container">
          <img src={seventhPlaceImage} alt="Seventh Place" className="seventh-place-photo" />
          </div> 
          <p>Address: {seventhPlaceAddress}</p>
        </div>
      )}
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
          <li>
          <Link to="/registrygifts">Registry/Gifts</Link>
         </li>
        </ul>
      </nav>
      <hr className="header-divider" /> {/* Horizontal rule below the navigation */}
    </div>
  );
}
export default Header;



import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Tiago &amp; Sue. All rights reserved.</p>
        <p>Designed and developed by Sue Park</p>
      </div>
    </footer>
  );
}

export default Footer;

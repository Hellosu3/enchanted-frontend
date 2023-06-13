// import React from 'react';
// import '../CSS/RegistryGifts.css';

// function RegistryGifts() {
//   return (
//     <div className="registry-gifts-container">
//       <h1>Registry/Gifts</h1>
//       <p>We are currently in transition on finding a place, so we would greatly appreciate monetary gifts through Zelle and Venmo. Thank you so much</p>
//       <p>Scan the preferred QR code below to send money to our accounts.</p>

//       <div className="payment-method">
//         <div className="qr-code">
//           <img className="logo" src="https://i.imgur.com/ZR3sahR.png" alt="Venmo Logo" />
//           <img src="https://i.imgur.com/OarWB7y.jpg" alt="Venmo QR Code" />
//         </div>
//         <div>
//         <p><a href="https://venmo.com/Sue-Park-3" target="_blank" rel="noopener noreferrer">@Sue-Park-3</a></p>
//         </div>
//       </div>

//       <div className="payment-method">
//         <div className="qr-code">
//           <img className="logo" src="https://i.imgur.com/WHBx7XM.png" alt="Zelle Logo" />
//           <img src="https://i.imgur.com/XZUmr7p.jpg" alt="Zelle QR Code" />
//         </div>
//         <p><a href="mailto:suepark84@gmail.com" target="_blank" rel="noopener noreferrer">suepark84@gmail.com</a></p>
//       </div>
//       <div className="payment-method">
//         <div className="qr-code">
//           <img className="logo" src="https://i.imgur.com/ihIbCdY.png" alt="Cash App Logo" />
//           <img src="https://i.imgur.com/6sQKTtq.jpg" alt="Cash App QR Code" />
//         </div>
//         <p><a href="https://cash.app/$tiramisuee" target="_blank" rel="noopener noreferrer">$tiramisuee</a></p>
//       </div>
//     </div>
//   );
// }

// export default RegistryGifts;

import React from 'react';
import '../CSS/RegistryGifts.css';

function RegistryGifts() {
  return (
    <div className="registry-gifts-container">
      <h1>Registry/Gifts</h1>
      <p>We are currently in transition on finding a place, so we would greatly appreciate monetary gifts through Zelle and Venmo. Thank you so much</p>
      <p>Scan the preferred QR code below to send money to our accounts.</p>

      <div className="payment-method">
        <div className="qr-code">
          <img className="logo" src="https://i.imgur.com/ZR3sahR.png" alt="Venmo Logo" />
          <img src="https://i.imgur.com/OarWB7y.jpg" alt="Venmo QR Code" />
        </div>
        <div>
          <p><a href="https://venmo.com/Sue-Park-3" target="_blank" rel="noopener noreferrer" className="sage-green-link">@Sue-Park-3</a></p>
        </div>
      </div>

      <div className="payment-method">
        <div className="qr-code">
          <img className="logo" src="https://i.imgur.com/WHBx7XM.png" alt="Zelle Logo" />
          <img src="https://i.imgur.com/XZUmr7p.jpg" alt="Zelle QR Code" />
        </div>
        <p><a href="mailto:suepark84@gmail.com" target="_blank" rel="noopener noreferrer" className="sage-green-link">suepark84@gmail.com</a></p>
      </div>

      <div className="payment-method">
        <div className="qr-code">
          <img className="logo" src="https://i.imgur.com/ihIbCdY.png" alt="Cash App Logo" />
          <img src="https://i.imgur.com/6sQKTtq.jpg" alt="Cash App QR Code" />
        </div>
        <p><a href="https://cash.app/$tiramisuee" target="_blank" rel="noopener noreferrer" className="sage-green-link">$tiramisuee</a></p>
      </div>
    </div>
  );
}

export default RegistryGifts;

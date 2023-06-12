import React from 'react';
import '../CSS/Ourstory.css';

function Ourstory() {
  return (
    <div className="gontainer">
      <div className="ourStoryPage">
        <img className="party-img" src="https://i.imgur.com/47nzI01.png" alt="photo 1" />
        <img className="party-img" src="https://i.imgur.com/73dFqSG.png" alt="photo 2" /> 
        <img className="party-img" src="https://i.imgur.com/uC2JMxc.png" alt="photo 3" /> 
      </div>

      <div className="storyContent">
        <h1>Our Story</h1>
        <p>
          Sue and Tiago met online as one's coffee and another's bagel. After several disappointing dates, Sue decided to be brave and change her age range from 32-40 to 28-34. Tiago had just turned 28, for it was midnight, making the cut of Sue's age range. Minutes after changing her age range, she noticed a message from someone with a unique name and several blurry photos. Sue took a chance on love and responded to his "hey!" The rest was history.
        </p> 
      </div>
    </div>
  );
}

export default Ourstory;





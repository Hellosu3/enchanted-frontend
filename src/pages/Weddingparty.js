import React, { useState } from 'react';




  const people = [
        {
          name: 'Grace',
          role: 'Matron of Honor',
          imageUrl:
            'https://i.imgur.com/hZfyilE.png',
          description: "Grace is one of my bestest friends, I've known since jr. high.  Her magnetic presence attracts attention wherever she goes. She has profound love for humanity. I admire her concerns and thoughts for others. It's a quality that draws people to her, seeking her wise counsel and guidance. It's no wonder she was called to a helping profession, where her warmth and sound advice make a positive impact. Beyond that, Grace is an absolute blast to be around; a total riot! We always stood up for one another, burned one another cds, held each other accountible, partied together, went to church together. Through thick and thin, we've remained steadfast, always supporting one another in prayer, in one another's bridal party, and I'm excited to raise my future kids with your kids. We went through so many of life's seasons together. She is very protective and loves fiercely. I'm grateful that our journey has carried us from our teenage years into adulthood, sharing so many significant moments along the way. How did I get so lucky? You're somone who makes me feel seen and loved. I love you"
        },
        {
            name: 'Alissa',
            role: 'Matron of Honor',
            imageUrl:
              'https://i.imgur.com/VaYU7sr.png',
            description: " Alissa is another one of my bestest friends. She has stuck by my side through all of the lemons life has thrown. She has an infectious laugh that will cause an uproar wherever she goes. She motivates me each and everyday to become a better version of myself. She is my constant cheerleader and I am hers. I first met her my freshman year. I wasn't sure how I felt about her glaring stares, but she turned out incredibly sweet. She offered her mom to give me a ride to school. Since then we were inseparable. We had all the same classes rest of highschool. We also lived 3 min. away from one another. We explored our teenage years together, dying our hair the same brassy blonde, getting all the same clothes and accessories. She would even bake my sisters a cake for their birthday. Treating them like her own. I used to copy her homework and get good grades. I am forever grateful she never snitched on me. She has a huge heart and one of the smartest girls I know who has incredible discpline and work ethic. She  epitomizes the work hard and play hard motto. I admire that she is always aspiring to be zen and loving in every aspect. She attracts so many to her. Everyone and myself adores her bright personality. I am very lucky to have you! I love you."
          },
          {
            name: 'Anne',
            role: ' Bridesmaid',
            imageUrl:
              'https://i.imgur.com/NIIYuQL.png',
            description: "Anne is another bestie of mine, I call our friendship a divine one. We've known one another for several years, but feels like a lifetime. From the very beginning we just clicked and instantly became my person. She is the one I can turn to without hesitation, knowing that she will embrace my deepest thoughts and help me navigate through them. She's an answer to prayer, a godly sister, I have so much fun doing life. She is someone who walks beside me through thick and thin. Anne is not only intelligent and knowledgeable but also an exceptional teacher, a remarkable friend, and a devoted mother. She is a total empath and can relate to so many. She attracts a lot of people and friends. one of the many traits I admire about Anne is her ability to bring people together. She is a natural at fostering inclusivity and unity among diverse communities, like a bridge. She effortlessly creates connections and fosters a sense of belonging wherever she goes. She is both beautiful inside and out. For those that didn't know, Anne and I partnered together and freelanced makeup together, we became an amazing team. Seriously I got really lucky to have met you and do life with you! I hope to have kids soon so we can raise our babies together. I love you!"
          },
          {
            name: 'Rachel',
            role: ' Bridesmaid',
            imageUrl:
              'https://i.imgur.com/ETElqPt.png',
            description: "I had the pleasure of meeting Rachel at Anne's birthday party a few years ago. We engaged in a conversation that sparked a beautiful friendship. We just clicked and quickly became inseparable. Our first coffee run together after lunch marked the beginning of countless delightful dates, and weekends were filled with fun brunches and coffee outings that added color to my life. She is someone I consider a SOUL sister and one of my dearest friends. With her, I can fully be myself, knowing and she loves and accepts me for who I am and it's mutual. She speaks my love languages. She is my ride or die and is always down for me. I can call her at random hours of the day and will answer. If I am having a crappy day, she reminds me she is a phone call away and will be there for me. Rachel's love for me is not just empty words; she consistently demonstrates her affections through her action. For instance, when my dog was sick and vomiting she accompanied me without hesitation. Speaking of my dog, a core memory of Rachel we share was when we laughed so hard that she accidentally spat out matcha on my dog, leaving a green stain on her coat! My dog gave us this judgemental stare at the both of us. It was a hilarious moment that will forever be imprinted in our friendship. Rachel brings immense joy to my life and those around her. She posesses a remarkable intellect, loving, a genuine commitment to second chances and forgiveness. Her optimism and empathy are qualites I admire and drawn to, and the list goes on. I love you and am so blessed to have you in my life."
          },
          {
            name: 'Amy',
            role: ' Bridesmaid',
            imageUrl:
              'https://i.imgur.com/BGAP3d8.png',
            description: "I love this woman more than words could express. Amy is one of my dearest and closest friends. Her soul is incredibly sweet. She has the ability to radiate joy through adversity. Even when she's feeling unwell or in pain, she never complains. I have to coax it out of her to ensure she's not suffering. She will never speak badly about anyone. She prioritizes others before herself and makes sure everyone is taken care of. Despite working full time and a dedicated mother, she has ambition to go back to school to pursue her dreams. I am so proud of her for all that she has accomplished. I admire her tenacity and strength. She has always been the motherly type since we were young. She would make sure we were hydrated when we were drinking, and would defuse any drama at parties. If ever I need advice or just wanting to talk to her, she would provide me with love and encouragement. She is also the friend who knows all the cute hallmark type quotes that are gives you the warm and fuzzies.  It's funny how we met Amy through her ex boyfriend. Our large group of friends took an astronmy course in college and all failed/ dropped out. We lost touch with him/ didn't care, but kept Amy. It was fate we met them so I could meet you. I am fortunate I met you! "
          },
          {
            name: 'Leah',
            role: ' Bridesmaid',
            imageUrl:
              'https://i.imgur.com/9AIN4C0.png',
            description: "Leah is my sweet childhood bestie I grew up with. She is the embodiment of home; someone safe and comforting. We would tell our parents we were studying, only to go to the library to have a full on boisterous picnic with our mojo potatoes. We would write love letters to one another in colorful gel pens then get fits of giggles like we were high, but was high off the sugar from shasta sodas, and were kicked out of the library for our antics. Another unforgettable memory I'll never forget was the time she broke her leg the day of the school carnival. Her dad thought she was faking it and made her hobble around campus. To make matters worse, a guy she had friend zoned asked her out in front of us. She said no, and he ran off crying. As if on cue, rain poured down and thundered. We had to help carry Leah to the gym, as we were drenched and she was limping. I could write a book of all the events that took place together. My adolescent and prepubescent years were so bright and colorful because you were in it. You helped shape me to be the woman I am today. We sought daring escapades together that I can't ever fathom doing now. Throughout it all you remained constant. As we transitioned into adulthood, you're the same beauitful, smart, charming, and captivating woman. I cherish our ability to reminisce about our fond memories and create new ones together! The bond we share is unbreakable, and I love you 4 eva."
          },
          {
            name: 'Jee',
            role: ' Bridesmaid',
            imageUrl:
              'https://i.imgur.com/D74hGQP.png',
            description: " Jee is my beloved sister, holds a special place in my heart as the middle sister among the three of us. I consider you to be one of the greatest blessings that God has bestowed upon my life. in our family, you're the glue that holds us together and the pillar of strength in our family. Your presence radiates warmth and love, making you an invaluable asset to our family. Your name itself,which means 'wise woman,' perfectly encapsulates the incredible wisdom and insight you posess.Even those who may not know you well are drawn to seek your advice and guidance, recognizing the depth of your wisdom. It's awe-inspiring to witness how you effortlessly embody the essence of your name, living it out with grace and poise. I am in awe of the path you have chosen as an amazing therapist. The signs that you received along the way, guiding you towards your calling, are a testament to your intuitive nature and your ability to listen to your heart/God. It fills me with admiration to see you follow the right path and step into your true purpose. Your dedication and passion for helping others through your therapeutic work are truly commendable. Beyond your wisdom and professional achievements, your loving and beautiful nature shines through in every aspect of your life. Your capacity to love unconditionally is unparalleled, and it brings me great joy to experience your love and affection. You have a way of making others feel cherished and valued, creating a sense of belonging and security wherever you go.Jee, words cannot fully express how much I admire and love you. Your presence in my life is a constant source of inspiration and comfort. You are a remarkable woman, both inside and out, and I am grateful to have you as my sister. May your journey be filled with endless blessings, and may your heart continue to radiate love and beauty. With all my love, I cherish you dearly! love you sistaaaaa"
          },
          {
            name: 'Jane',
            role: ' Bridesmaid',
            imageUrl:
              'https://i.imgur.com/NlNteI1.png',
            description: "My dearest baby sister! In the blink of an eye, you transformed into a beautiful woman. From the days of driving you around as my little sister to now sharing moments over a cup of coffee, our bond has evolved into something truly special. I can't help but marvel at the incredible woman you have become – smart, successful, and full of potential. When did you acquire such wisdom and accomplish so much? Your achievements inspire and motivate me to reach for my own dreams. Although you may have grown into an accomplished individual, in my heart, you will forever be my precious little 10 year old, the one who used to wear limited 2. God truly blessed me by granting me someone I can call sister with pride and joy. We share countless memories and laughter. Living under the same roof has brought us closer than ever, and I am grateful for the experiences we've had together. I hold dear the moments of our fun-filled sisters' nights in, where we indulged in guilty pleasures of watching trashy reality shows, while also engaging in heartfelt conversations about spirituality and our faith in God. You are so generous and care deeply. As your older sister, I may have more life experience, but I am constantly learning from you. Your unwavering determination and genuine care for others challenge me to become a better person, not just for myself but also as a sister you can be proud of. Your generosity and deep compassion touch the lives of those around you, and it is a testament to the incredible soul that you possess. I am blessed beyond measure to have you as my sister. I love you with all my heart, and I am immensely proud to call you my family.Love you!"


          },
        {
          name: 'Allen',
          role: 'Best Man',
          imageUrl:
            'https://i.imgur.com/VxvHy9Y.png',
          description:"Allen Ahn, my best childhood friend and confidant, holds the honor of being my best man. Since our early school days, we've been inseparable. We attended the same tutoring academy and were total goofs together. From attending our first school dance together to navigating the challenges of adolescence, Allen has been there every step of the way. His unwavering loyalty, wisdom, and sense of humor make him an extraordinary best friend, and I'm grateful to have him standing beside me on this special day."
        },
        {
            name: 'Woody',
            role: 'Groomsman',
            imageUrl:
              'https://i.imgur.com/Ku5JOt3.png',
            description:"Woody Ahn, my best childhood friend since our elementary school days, stands by my side as a groomsman. He was one of my first English speaking friends. I was at a trading card store and he had asked me which sticker he should purchase. With my limited English I replied 'this no, this yes.' We've shared countless memories and adventures together throughout our childhood. He had accepted my fobiness and has always been a loyal and reliable friend. His unwavering support and friendship mean the world to me."
          },
          {
            name: 'Dan',
            role: 'Groomsman',
            imageUrl:
              'https://i.imgur.com/6cZZhOT.png',
            description: "Dan Wongthavatchai, a close friend of both my fiance Sue and myself, joins us as a groomsman. He treats me like family and welcomed me from the beginning. Dan has witnessed our relationship blossom from the early stages, offering his unwavering support and guidance along the way. Turns out He is above all talents and is an ordained minister. He married us legally and his presence and friendship have been invaluable, and I am honored to have him standing by our side on our wedding day."
          },
          {
            name: 'Andy',
            role: 'Groomsman',
            imageUrl:
              'https://i.imgur.com/K040aS7.png',
            description: "Andy Chiu has been a solid friend. It's been cool journeying in our faith together, but with a similar upbringing. I felt I could relate to him in many ways. Andy's friendship has been a source of encouragement. Andy has been a steadfast companion, sharing in our joys and offering support. I am incredibly grateful to have him as a groomsman."
          },
          {
            name: 'Rick',
            role: 'Groomsman',
            imageUrl:
              'https://i.imgur.com/6vtJ8Iy.png',
              description: "Ricardo, my eldest brother, proudly stands by my side as a groomsman. As my older brother, Ricardo has been a guiding light in my life, offering wisdom, support, and brotherly love. His presence on this special day holds great significance, and I'm honored to have him as a part of my wedding party."
          },
          {
            name: 'Filipe',
            role: 'Groomsman',
            imageUrl:
              'https://i.imgur.com/3ZxSHb5.png',
            description: "Filipe, my brother and close companion, joins the wedding party as a groomsman. With only a year between us, Filipe and I have shared countless adventures, laughter, and memories. His unwavering support and brotherly bond mean the world to me, and I'm thrilled to have him standing beside me as I embark on this new chapter of my life."
          },
        
    
];

const PersonDescription = ({ person }) => {
  return (
    <div>
      <h2>{person.name}</h2>
      <p>{person.role}</p>
      <p>{person.description}</p> 
    </div>
  );
};



const WeddingParty = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  const handleCloseClick = () => {
    setSelectedPerson(null);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our I do Crew</h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">Meet the wedding party!</p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-24 w-24 rounded-full cursor-pointer"
                  src={person.imageUrl}
                  alt=""
                  onClick={() => handlePersonClick(person)}
                />
                <div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-base leading-6 text-violet-800">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedPerson && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <PersonDescription person={selectedPerson} />
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={handleCloseClick}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeddingParty;

import { useEffect, useState } from 'react';
import AccessButton from './AccessButton';
import LandingSlider from './LandingSlider';

function LandingPage() {
  const words = ['Buy.', 'Explore.', 'Discover.', 'Shop.'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500); // change word every 2sec

    return () => {
      clearInterval(intervalId);
    };
  }, [words.length]);

  return (
    <>
      <main className='main'>
        <div className='main_text'>
          <p className='main_text--title'>Click.</p>
          <p className='main_text--changingWord'>{words[currentWordIndex]}</p>
          <p className='main_text--word'>Enjoy.</p>
        </div>

        <AccessButton />
        <LandingSlider />
      </main>
    </>
  );
}

export default LandingPage;

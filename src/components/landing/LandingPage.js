import { useEffect, useState } from 'react';
import AccessButton from './AccessButton';
import LandingSlider from './LandingSlider';

function LandingPage() {
  const words = ['Buy.', 'Explore.', 'Discover.'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentLetterIndex < words[currentWordIndex].length) {
        const newWord =
          currentWord + words[currentWordIndex][currentLetterIndex];
        setCurrentWord(newWord);
        setCurrentLetterIndex(currentLetterIndex + 1);
      } else {
        setCurrentLetterIndex(0);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setCurrentWord('');
      }
    }, 260);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentLetterIndex, currentWord, currentWordIndex, words]);

  return (
    <>
      <main className='main'>
        <div className='main_text'>
          <p className='main_text--title'>Click.</p>
          <p className='main_text--changingWord'>{currentWord}</p>
          <p className='main_text--word'>Enjoy.</p>
        </div>

        <AccessButton />
        <LandingSlider />
      </main>
    </>
  );
}

export default LandingPage;

import AccessButton from './AccessButton';
import LandingSlider from './LandingSlider';

function LandingPage() {
  return (
    <>
      <main className='main'>
        <div className='main_text'>
          <p className='main_text--title'>Click.</p>
          <p className='main_text--changingWord'>Buy.</p>
          <p className='main_text--word'>Enjoy.</p>
        </div>

        <AccessButton />
        <LandingSlider />
      </main>
    </>
  );
}

export default LandingPage;

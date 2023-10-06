import '../styles/App.scss';
import backgroundImg from '../img/landingBackground.jpg';

function App() {
  return (
    <>
      <img
        src={backgroundImg}
        alt='abstract background in brown tones'
        className='landingBackground'
      />

      <button className='landingButton'>Accede</button>
    </>
  );
}

export default App;

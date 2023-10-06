import flechaDoble from '../../img/doble-derecha.png';

function LandingPage() {
  return (
    <main className='main'>
      <div className='main_text'>
        <h1 className='main_text--title'>Bienvenido</h1>
        <p className='main_text--quote'>
          Accede y encuentra lo que buscas entre todos nuestros productos
        </p>
      </div>

      <button className='landingButton'>
        <img
          src={flechaDoble}
          alt='icono flecha doble hacia la derecha'
          className='landingButton_arrows'
        />
        <span className='landingButton_word'>Accede</span>
      </button>
    </main>
  );
}

export default LandingPage;

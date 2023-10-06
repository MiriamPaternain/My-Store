import AccessButton from './AccessButton';

function LandingPage() {
  return (
    <main className='main'>
      <div className='main_text'>
        <h1 className='main_text--title'>Bienvenido</h1>
        <p className='main_text--quote'>
          Accede y encuentra lo que buscas entre todos nuestros productos
        </p>
      </div>

      <AccessButton />
    </main>
  );
}

export default LandingPage;

import BackButton from '../BackButton';
import Header from './Header/Header';

function ShoppingCart({ boughtItems }) {
  return (
    <>
      <Header />
      <BackButton />
      <h1 className='ShoppingCart_title'>Shopping Cart</h1>
      <ul>
        {boughtItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ShoppingCart;

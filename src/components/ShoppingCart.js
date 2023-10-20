import BackButton from './BackButton';
import Header from './MainPage/Header/Header';

function ShoppingCart({ boughtItems }) {
  const total = boughtItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Header />
      <BackButton />
      <h1 className='ShoppingCart_title'>Shopping Cart</h1>
      <ul>
        {boughtItems.map((item, index) => (
          <li key={index} className='ShoppingCart_list'>
            <p>{item.title}</p>
            <img
              src={item.image}
              alt={item.title}
              className='ShoppingCart_img'
            />
            <p>{item.price} €</p>
          </li>
        ))}
      </ul>
      <div>
        <p className='ShoppingCart_total'>Total: {total} €</p>
      </div>
    </>
  );
}

export default ShoppingCart;

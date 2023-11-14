import FilterProducts from './Header/FilterProducts';
import ProductsList from './ProductsList';
import Nav from './Header/Header';
import BackButton from '../BackButton';
import Header from './Header/Header';

function ProductsPage({ addToCart }) {
  return (
    <>
      <div className='mainContainer'>
        <Header />
        <BackButton />
        <ProductsList addToCart={addToCart} />
      </div>
    </>
  );
}

export default ProductsPage;

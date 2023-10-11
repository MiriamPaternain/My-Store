import FilterProducts from './FilterProducts';
import ProductsList from './ProductsList';
import Nav from './Header/Header';
import BackButton from '../BackButton';

function ProductsPage() {
  return (
    <>
      <Nav />
      <BackButton />
      <ProductsList />
    </>
  );
}

export default ProductsPage;

import FilterProducts from './FilterProducts';
import ProductsList from './ProductsList';
import Nav from './Header/Header';
import BackButton from '../BackButton';
import Header from './Header/Header';

function ProductsPage() {
  return (
    <>
      <Header />
      <BackButton />
      <ProductsList />
    </>
  );
}

export default ProductsPage;

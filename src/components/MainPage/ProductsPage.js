import FilterProducts from './FilterProducts';
import ProductsList from './ProductsList';
import Nav from './Header/Header';

function ProductsPage() {
  return (
    <>
      <Nav />
      <FilterProducts />
      <ProductsList />
    </>
  );
}

export default ProductsPage;

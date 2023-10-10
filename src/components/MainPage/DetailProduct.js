import { useParams } from 'react-router-dom';

const DetailProduct = ({ products }) => {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>This product does not exist</div>;
  }

  return (
    <>
      <h1>{product.title}</h1>
    </>
  );
};

export default DetailProduct;

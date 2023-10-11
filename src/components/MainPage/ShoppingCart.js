function ShoppingCart({ boughtItems }) {
  return (
    <>
      <h1>Shopping Cart</h1>
      <ul>
        {boughtItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ShoppingCart;

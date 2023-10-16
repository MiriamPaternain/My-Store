import { useState } from 'react';
import Modal from 'react-modal';

function ShoppingCartButton({ product, onAddToCart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button onClick={handleAddToCart} className='shoppinCartButton'>
        🛒
      </button>
      <AddedtoCartModal
        isModalOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
    </>
  );
}

function AddedtoCartModal({ isModalOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onRequestClose}
      contentLabel='Product added to cart'>
      <div className='productAddedModal'>
        <h2 className='productAddedModal_title'>Product added to cart</h2>
        <p className='productAddedModal_text'>
          This product has beend added to your shopping cart.
        </p>
        <button onClick={onRequestClose}>Close</button>
      </div>
    </Modal>
  );
}

export default ShoppingCartButton;

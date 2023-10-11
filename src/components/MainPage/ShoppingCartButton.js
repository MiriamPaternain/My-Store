import { useState } from 'react';
import Modal from 'react-modal';

function ShoppingCartButton({ product, onClick }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (product) => {
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
      <h2>Product added to cart</h2>
      <p>This product has beend added to your shopping cart.</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
}

export default ShoppingCartButton;

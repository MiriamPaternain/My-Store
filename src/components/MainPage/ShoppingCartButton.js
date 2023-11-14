import { useState } from 'react';
import Modal from 'react-modal';
import { Link, NavLink } from 'react-router-dom';
import check from '../../img/marca-de-verificacion.png';

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
      contentLabel='Product added to cart'
      style={{
        content: {
          width: '50%',
          height: '50%',
          margin: 'auto',
        },
      }}>
      <div className='productAddedModal'>
        <h2 className='productAddedModal_title'>
          <img
            className='productAddedModal_checkIcon'
            src={check}
            alt='check icon'
          />
          Product successfully added to your shopping cart
        </h2>

        <button onClick={onRequestClose} className='productAddedModal_closeBtn'>
          X
        </button>
        <Link to='/cart' className='link_goToShoppingCart'>
          Go to Shopping Cart
        </Link>
      </div>
    </Modal>
  );
}

export default ShoppingCartButton;

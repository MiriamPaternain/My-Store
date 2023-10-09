function NavBar({ menuOpen, handleClick }) {
  return (
    <>
      {menuOpen && (
        <div className='modal'>
          <div className='navBar'>
            <a href='/contact' onClick={handleClick} className='link'>
              Landing Page
            </a>
            <a href='/contact' onClick={handleClick} className='link'>
              Products
            </a>
            <a href='/contact' onClick={handleClick} className='link'>
              Shopping cart
            </a>
            <a href='/contact' onClick={handleClick} className='link'>
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;

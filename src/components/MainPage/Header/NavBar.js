function NavBar({ menuOpen, handleClick }) {
  return (
    <>
      {menuOpen && (
        <div className='modal'>
          <div className='navBar'>
            <a href='/contact' onClick={handleClick}>
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;

import { useState } from 'react';
import logo from '../../../img/logo.png';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <img src={logo} alt='' className='navLogo' />

      <div className='menuButton' onClick={handleClick}>
        {menuOpen ? '✕' : '☰'}
      </div>

      <NavBar menuOpen={menuOpen} handleClick={handleClick} />
    </>
  );
}

export default Header;

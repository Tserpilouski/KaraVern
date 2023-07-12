import { Link } from 'react-router-dom';

import { IoEarth } from 'react-icons/io5';
import logo from '../assets/logoKaravern.svg';

import '../styles/componets/navbar.scss';

const NavBar = () => {
  const parts = window.location.href.split('/');
  const lastPart = parts[parts.length - 1];

  return (
    <div className='nav'>
      <div className='nav__logo-box'>
        <img className='nav__logo' src={logo} alt='' />
      </div>
      <ul className='nav__list'>
        <li className={lastPart === 'KaraVern' ? 'active-nav' : ''}>
          <Link to='/KaraVern'>Home</Link>
        </li>
        <li className={lastPart === 'about' ? 'active-nav' : ''}>
          <Link to='/about'>O mnie</Link>
        </li>
        <li className={lastPart === 'myworks' ? 'active-nav' : ''}>
          <Link to='/myworks'>Oferta</Link>
        </li>
        <li className={lastPart === 'studing' ? 'active-nav' : ''}>
          <Link to='/studing'>Szkolenie</Link>
        </li>
        <li>
          <Link to='/studing-page'>card</Link>
        </li>
        <li>
          <a href='1'>PL</a>
          <IoEarth className='icon' />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

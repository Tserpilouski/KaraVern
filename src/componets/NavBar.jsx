import { Link } from 'react-router-dom';

import { IoEarth } from 'react-icons/io5';
import logo from '../assets/logoKaravern.svg';

import '../styles/componets/navbar.scss';

const NavBar = () => {
  return (
    <div className='nav'>
      <div>
        <img className='nav__logo' src={logo} alt='' />
      </div>
      <ul className='nav__list'>
        <li>
          <Link to='/KaraVern'>Home</Link>
        </li>
        <li>
          <Link to='/about'>O mnie</Link>
        </li>
        <li>
          <Link to='/myworks'>Oferta</Link>
        </li>
        <li>
          <Link to='/studing'>Szkolenie</Link>
        </li>
        <li>
          <Link to='/studing-page'>card</Link>
        </li>
        <li>
          <IoEarth className='icon' />
          <a href='1'>PL</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

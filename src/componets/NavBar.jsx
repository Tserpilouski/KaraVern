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
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/myworks'>My Works</Link>
        </li>
        <li>
          <Link to='/studing'>Studing</Link>
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

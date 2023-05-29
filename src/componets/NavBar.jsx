import { Link } from 'react-router-dom';

import { IoEarth } from 'react-icons/io5';

import '../styles/navbar.scss';

const NavBar = () => {
  return (
    <div className='nav'>
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
          <a href='#'>PL</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

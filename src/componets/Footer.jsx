import '../styles/componets/footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <h3>BEAUTY MASTER KARAVERN </h3>
        <ul className='vertical-line-list'>
          <li>
            <span>tel. +48 833 383 833</span>
          </li>
          <li>
            <span>e-mail: beaty@gmail.com</span>
          </li>
          <li>
            <span>10:00 do 21:00 Pn-Nd</span>
          </li>
          <li>
            <span>ul. Ozimska 40 45-271 Opole</span>
          </li>
          {/* <li>
            <div className='footer__left__line'></div>
          </li> */}
        </ul>
        {/* <div className='footer__left__line'></div> */}
      </div>
      <div className='footer__right'>
        <h3>UMÓW SIĘ NA WIZYTĘ</h3>
        <span>
          Przed umówieniem wizyty bardzo proszę o zapoznanie się z regulaminem
          oraz przeciwwskazaniami dotyczącymi poszczególnych zabiegów.
        </span>
        <form action=''>
          <input type='text' placeholder='Your name*' />
          <input type='number' placeholder='Your phone number*' />
          <button>WYŚLIJ</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;

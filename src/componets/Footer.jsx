import '../styles/componets/footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <h3>BEAUTY MASTER KARAVERN </h3>
        <span>tel. +48 833 383 833</span>
        <span>email beaty@gmail.com</span>
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

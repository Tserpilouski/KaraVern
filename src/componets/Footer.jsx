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
        <h3>BOOK OR GET A CONSULTATION</h3>
        <span>Get in contact very quickly!</span>
        <form action=''>
          <input type='text' placeholder='Your name*' />
          <input type='number' placeholder='Your phone number*' />
          <button>send a message</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;

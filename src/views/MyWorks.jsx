import NavBar from '../componets/NavBar';
import WelcomeNoBTN from '../componets/WelcomeNoBTN';
import MyWork from '../componets/MyWork';
import Footer from '../componets/Footer';

import '../styles/views/myWorks.scss';

const MyWorks = () => {
  return (
    <div>
      <NavBar />
      <WelcomeNoBTN />
      <MyWork />
      <MyWork />
      <MyWork />
      <Footer />
    </div>
  );
};

export default MyWorks;

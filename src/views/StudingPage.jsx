import NavBar from '../componets/NavBar';
import Welcome from '../componets/Welcome';
import CardStudingInfo from '../componets/CardStudingInfo';
import Footer from '../componets/Footer';

import '../styles/views/studingPage.scss';

const StudingPage = () => {
  return (
    <div>
      <NavBar />
      <Welcome />
      <CardStudingInfo />
      <Footer />
    </div>
  );
};

export default StudingPage;

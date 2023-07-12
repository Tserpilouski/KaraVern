import NavBar from '../componets/NavBar';
import Welcome from '../componets/Welcome';
import CardStuding from '../componets/CardStuding';
import Footer from '../componets/Footer';

import '../styles/views/studing.scss';

const Studing = () => {
  return (
    <div>
      <NavBar />
      <Welcome />
      <CardStuding />
      <Footer />
    </div>
  );
};

export default Studing;

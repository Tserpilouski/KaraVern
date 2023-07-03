import NavBar from '../componets/NavBar';
import Welcome from '../componets/Welcome';
import MyWork from '../componets/MyWork';
import Footer from '../componets/Footer';

import '../styles/views/myWorks.scss';

const MyWorks = () => {
  return (
    <div>
      <NavBar />
      <Welcome />
      <MyWork />
      <MyWork />
      <MyWork />
      <div className='space'></div>
      <Footer />
    </div>
  );
};

export default MyWorks;

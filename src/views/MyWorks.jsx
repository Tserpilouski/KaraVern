import NavBar from '../componets/NavBar';
import Welcome from '../componets/Welcome';
import MyWork from '../componets/MyWork';
import StudingHome from '../componets/StudingHome';
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
      <StudingHome />
      <Footer />
    </div>
  );
};

export default MyWorks;

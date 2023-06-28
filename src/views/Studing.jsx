import { useState } from 'react';
import NavBar from '../componets/NavBar';
import WelcomeNoBTN from '../componets/WelcomeNoBTN';
import CardStuding from '../componets/CardStuding';
import Footer from '../componets/Footer';

import '../styles/views/studing.scss';

const Studing = () => {
  return (
    <div>
      <NavBar />
      <WelcomeNoBTN />
      <CardStuding />
      <CardStuding />
      <CardStuding />
      <Footer />
    </div>
  );
};

export default Studing;

import { Routes, Route } from 'react-router-dom'

import Home from './views/Home';
import About from './views/About';
import MyWorks from './views/MyWorks';
import Studing from './views/Studing';
import Layout from './componets/Layout';
import StudingPage from './views/StudingPage';

import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/KaraVern" element={<Home />} />
      <Route path="/" element={<Layout />}>
        <Route path="/about" element={<About />} />
        <Route path="/myworks" element={<MyWorks />} />
        <Route path="/studing" element={<Studing />} />
        <Route path="/studing-page" element={<StudingPage />} />
        <Route path="/studing-page-1" element={<StudingPage />} />
        <Route path="/studing-page-2" element={<StudingPage />} />
      </Route>
    </Routes>
  );
}

export default App;

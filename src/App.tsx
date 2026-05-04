import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import MainPage from './pages/MainPage';
import ContactPage from './pages/ContactPage';
import RoadMapPage from './pages/RoadMapPage';
import KlanTourPage from './pages/KlanTourPage';
import CityTourPage from './pages/CityTourPage';
import RulesPage from './pages/RulesPage';
import RigmusokPage from './pages/RigmusokPage';

import './assets/index.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/roadmap" element={<RoadMapPage />} />
        <Route path="/city-tour" element={<CityTourPage />} />
        <Route path="/klan-tour" element={<KlanTourPage />} />
        <Route path="/elerhetosegek" element={<ContactPage />} />
        <Route path="/rigmusok" element={<RigmusokPage />} />
        {/*
        <Route path="/adatok" element={<RegistrationPage />} />
        <Route path="/polok-hoodie" element={<PolokHoodiePage />} />
        */}
        <Route path="/szabalyzatok" element={<RulesPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

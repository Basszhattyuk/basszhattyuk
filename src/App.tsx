import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import MainPage from './pages/MainPage';
import PolokHoodiePage from './pages/PolokHoodiePage';
import ContactPage from './pages/ContactPage';
import RegistrationPage from './pages/RegistrationPage';

import './assets/index.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/elerhetosegek" element={<ContactPage />} />
        <Route path="/adatok" element={<RegistrationPage />} />
        <Route path="/polok-hoodie" element={<PolokHoodiePage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

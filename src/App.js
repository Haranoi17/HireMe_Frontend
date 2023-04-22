import './App.css';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm'

import Navbar from './Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OfferSearcher from './OfferSearcher/OfferSearcher';
import LandingPage from './LandingPage/LandingPage';
import OfferPage from './OfferPage/OfferPage';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path='login' element={<LoginForm />} />
            <Route path='register' element={<RegisterForm />} />
            <Route path='search' element={<OfferSearcher />} />
            <Route path='search/offerPage' element={<OfferPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';

import { checkIfLoggedIn, getLoggedUser } from './ApiRoutes';
import { LoginButton, RegisterButton, LogoutButton, UserPanelButton } from './NavbarButtons/NavbarButtons'

import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm'
import Navbar from './Navbar/Navbar';
import OfferBrowser from './OfferBrowser/OfferBrowser';
import LandingPage from './LandingPage/LandingPage';
import OfferPage from './OfferPage/OfferPage';
import UserPanel from './UserPanel/UserPanel';
import HireMeLogo from './HireMeLogo/HireMeLogo';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAccount, setUserAccount] = useState({});
  const [userPannelButton, setUserPannelButton] = useState()

  useEffect(() => {
    checkIfLoggedIn()
      .then(response => setIsLoggedIn(response.value))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      getLoggedUser()
        .then(response => setUserAccount(response))
        .catch(error => console.log(error))
    }
  }, [isLoggedIn])

  useEffect(() => {
    setUserPannelButton(<UserPanelButton user={userAccount} />)
  }, [userAccount])

  return (
    <div className="App">
      <BrowserRouter>

        <Navbar
          isLoggedIn={isLoggedIn}
          logo={<HireMeLogo />}
          loginButton={<LoginButton />}
          registerButton={<RegisterButton />}
          logoutButton={<LogoutButton setIsLoggedIn={setIsLoggedIn} />}
          userPanelButton={userPannelButton}
        />

        <main>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path='login' element={<LoginForm setIsUserLoggedIn={setIsLoggedIn} />} />
            <Route path='register' element={<RegisterForm setIsUserLoggedIn={setIsLoggedIn} />} />
            <Route path='search' element={<OfferBrowser />} />
            <Route path='offerPage' element={<OfferPage />} />
            <Route path='userPanel' element={<UserPanel userAccount={userAccount} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

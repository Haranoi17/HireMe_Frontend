import './App.css';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm'

import Navbar from './Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OfferSearcher from './OfferSearcher/OfferSearcher';
import LandingPage from './LandingPage/LandingPage';
import OfferPage from './OfferPage/OfferPage';
import { useEffect, useState } from 'react';
import LoggedInLoggedOutRenderBrancher from './LoggedInLoggedOutRenderBrancher/LoggedInLoggedOutRenderBrancher';
import { Link } from 'react-router-dom';
import { checkIfLoggedIn, getLoggedUser, logoutUser } from './ApiRoutes';
import UserPanel from './UserPanel/UserPanel';

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userAccountInfo, setUserAccountInfo] = useState();
  const [navbarLoginRenderBrancher, setNavbarLoginRenderBrancher] = useState()


  useEffect(() => {
    setNavbarLoginRenderBrancher(<LoggedInLoggedOutRenderBrancher
      renderIfLoggedIn={
        <div>
          <Link to='userPanel'>
            <button>Hi {isUserLoggedIn ? userAccountInfo.name : null}</button>
          </Link>
          <button onClick={async () => {
            await logoutUser();
            setIsUserLoggedIn(false)
          }}>logout</button>
        </div>
      }
      renderIfNotLoggedIn={
        <div className='Buttons'>
          <Link to='login'>
            <button>login</button>
          </Link>
          <Link to='/register'>
            <button>register</button>
          </Link>
        </div>
      }
      isLoggedIn={isUserLoggedIn}
    />)
  }, [isUserLoggedIn, userAccountInfo]);

  useEffect(() => {
    getLoggedUser().then(response=>setUserAccountInfo({name: response.value}))
  }, [isUserLoggedIn])

  useEffect(() => {
    checkIfLoggedIn()
      .then(response => {
        const isLoggedIn = response.value;
        setIsUserLoggedIn(isLoggedIn);
      })
      .catch(error => console.log(error))
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedInLoggedOutRenderBrancher={navbarLoginRenderBrancher} />
        <main>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path='login' element={<LoginForm setIsUserLoggedIn={setIsUserLoggedIn} />} />
            <Route path='register' element={<RegisterForm />} />
            <Route path='search' element={<OfferSearcher />} />
            <Route path='search/offerPage' element={<OfferPage />} />
            <Route path='userPanel' element={<UserPanel userAccountInfo={userAccountInfo} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

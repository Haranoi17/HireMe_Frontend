import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';

import { ThemeProvider, createTheme } from '@mui/material';
import { LoginContext } from './Contexts/LoginContext';

import LoginPage from './Pages/LoginPage/LoginPage';
import OfferBrowser from './Pages/OfferBrowser/OfferBrowser';
import LandingPage from './Pages/LandingPage/LandingPage';
import OfferPage from './Pages/OfferPage/OfferPage';
import UserPanel from './UserPanel/UserPanel';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import NavBar from './Navbar/NavBar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A4D68',
      dark: '#212A3E',
      light: '#0A4D68'
    },
    secondary: {
      main: '#9BA4B5',
      light: '#F1F6F9',
      dark: '#0A4D68'
    }
  }
})

export default function App() {
  const [context, setContext] = useState(LoginContext)

  return (
    <ThemeProvider theme={theme}>
      <LoginContext.Provider value={[context, setContext]}>

        <BrowserRouter>

          <NavBar/>

          <main>
            <Routes>
              <Route index element={<LandingPage />} />
              <Route path='login' element={<LoginPage />} />
              <Route path='register' element={<RegisterPage />} />
              <Route path='search' element={<OfferBrowser />} />
              <Route path='offerPage' element={<OfferPage />} />
              <Route path='userPanel' element={<UserPanel />} />
            </Routes>
          </main>
        </BrowserRouter>
      </LoginContext.Provider>
    </ThemeProvider>
  );
}

import './App.css';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm'

import Navbar from './Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route index element={<div>This is Index</div>} />
            <Route path='login' element={<LoginForm/>} />
            <Route path='register' element={<RegisterForm/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

import './RegisterForm.css'
import { useState } from 'react'

export default function LoginForm() {
    const [serverResponse, setServerResponse] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const sendRegisterRequest = () => {
        fetch('https://localhost:7046/api/Account/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                name: userName,
                email: email,
                password: password
            })
        })
            .then(response => response.json())
            .then(data => setServerResponse(data.map((item)=>{return <div className='errorMessage'>{item.description}</div>})))
            .catch(error => console.error(error));
    };

    const updateUserName = (event) => { setUserName(event.target.value) };
    const updatePassword = (event) => { setPassword(event.target.value) };
    const updateEmail = (event) => { setEmail(event.target.value) };

    return (
        <div className='registerForm'>
            <input type='text' placeholder='login' value={userName} onChange={updateUserName}></input>
            <input type='text' placeholder='email' value={email} onChange={updateEmail}></input>
            <input type='password' placeholder='password' value={password} onChange={updatePassword}></input>

            <button onClick={sendRegisterRequest}>Register</button>

            <div className='response'>{serverResponse}</div>
        </div>
    );
}
import './LoginForm.css'
import { useState } from 'react'

export default function LoginForm() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [serverResponse, setServerResponse] = useState('');

    const sendLoginRequest = () => {
        fetch('https://localhost:7046/api/Account/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({
                name: userName,
                password: password
            })
        })
            .then(response => response.json())
            .then(data => setServerResponse(data.value))
            .catch(error => console.error(error));
    };

    const updateUserName = (event) => { setUserName(event.target.value) };
    const updatePassword = (event) => { setPassword(event.target.value) };

    return (
        <div className='loginForm'>
            <input type="text" placeholder="login" value={userName} onChange={updateUserName}></input>
            <input type="password" placeholder="password" value={password} onChange={updatePassword}></input>
            <button onClick={sendLoginRequest} >login</button>

            <p>{serverResponse}</p>
        </div>
    );
}
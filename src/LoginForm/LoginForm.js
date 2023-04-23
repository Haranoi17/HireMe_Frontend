import axios from 'axios'
import './LoginForm.css'
import { useEffect, useState } from 'react'
import { loginUser } from '../ApiRoutes'
import ServerMessagePrinter from '../ServerMessagePrinters/ServerMessagePrinter'
import SuccessServerMessage from '../ServerMessagePrinters/SuccessServerMessage'
import ErrorServerMessage from '../ServerMessagePrinters/ErrorServerMessage'

export default function LoginForm({ setIsUserLoggedIn }) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [serverResponse, setServerResponse] = useState('')


    const sendLoginRequest = () => {
        const loginCredentials = JSON.stringify({
            name: userName,
            password: password
        })

        loginUser(loginCredentials)
            .then(response => {
                setServerResponse(<ServerMessagePrinter messages={[<SuccessServerMessage text={response.value} />]} />)
                const isLoggedIn = response.value == 'User logged in';
                setIsUserLoggedIn(isLoggedIn);
            })
            .catch(error => setServerResponse(<ServerMessagePrinter messages={[<ErrorServerMessage text={error.response.data.value} />]} />))
    }

    const updateUserName = (event) => { setUserName(event.target.value) }
    const updatePassword = (event) => { setPassword(event.target.value) }

    return (
        <div className='loginForm'>
            <input type="text" placeholder="login" value={userName} onChange={updateUserName}></input>
            <input type="password" placeholder="password" value={password} onChange={updatePassword}></input>
            <button onClick={sendLoginRequest} >login</button>

            <div className='ServerResponse'>{serverResponse}</div>
        </div>
    );
}
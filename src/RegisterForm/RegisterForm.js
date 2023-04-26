import './RegisterForm.css'
import { useEffect, useState } from 'react'
import { checkIfLoggedIn, registerUser } from '../ApiRoutes'
import ServerMessagePrinter from '../ServerMessagePrinters/ServerMessagePrinter'
import SuccessServerMessage from '../ServerMessagePrinters/SuccessServerMessage'
import ErrorServerMessage from '../ServerMessagePrinters/ErrorServerMessage'

export default function RegisterForm({ setIsUserLoggedIn }) {
    const [serverResponse, setServerResponse] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const sendRegisterRequest = () => {
        const registerCredentials = JSON.stringify({
            name: userName,
            email: email,
            password: password
        })
        registerUser(registerCredentials)
            .then(response => setServerResponse(<ServerMessagePrinter messages={[<SuccessServerMessage text={response.value} />]} />))
            .catch(error => setServerResponse(<ServerMessagePrinter messages={error.response.data.value.map((item) => <ErrorServerMessage text={item.description} />)} />))
    }

    const updateUserName = (event) => { setUserName(event.target.value) }
    const updatePassword = (event) => { setPassword(event.target.value) }
    const updateEmail = (event) => { setEmail(event.target.value) }

    useEffect(() => {
        checkIfLoggedIn()
            .then(response => setIsUserLoggedIn(response.value))
            .catch(error => console.log(error))
    }, [serverResponse])

    return (
        <div className='registerForm'>
            <input type='text' placeholder='login' value={userName} onChange={updateUserName}></input>
            <input type='text' placeholder='email' value={email} onChange={updateEmail}></input>
            <input type='password' placeholder='password' value={password} onChange={updatePassword}></input>

            <button onClick={sendRegisterRequest}>Register</button>

            <div className='ServerResponse'>{serverResponse}</div>
        </div>
    );
}
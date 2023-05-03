import { useEffect, useState, useContext } from 'react'
import { checkIfLoggedIn, loginUser } from '../../ApiRoutes'

import { Grid, TextField, Button } from '@mui/material'

export default function LoginForm({setLoginStatus}) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const sendLoginRequest = () => {
        const loginCredentials = JSON.stringify({
            name: userName,
            password: password
        })

        loginUser(loginCredentials)
            .then(response => setLoginStatus({
                success: true,
                messages: [response.value]
            }))
            .catch(error => setLoginStatus({
                success: false,
                messages: [error.response.data.value]
            }))
    }

    const updateUserName = (event) => { setUserName(event.target.value) }
    const updatePassword = (event) => { setPassword(event.target.value) }

    return (
        <Grid container rowSpacing={1} columns={1} alignItems={'center'} direction={'column'}>
            <Grid item>
                <TextField variant='standard' label='Login' value={userName} onChange={updateUserName}/>
            </Grid>
            <Grid item>
                <TextField variant='standard' label='Password' type='password' value={password} onChange={updatePassword}/>
            </Grid>
            <Grid item>
                <Button variant='contained' sx={{marginTop: 4}} onClick={sendLoginRequest}>login</Button>
            </Grid>
        </Grid>
    );
}
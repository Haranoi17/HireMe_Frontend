import { useState } from 'react'
import { registerUser } from '../../ApiRoutes'
import { Grid, TextField, Button } from '@mui/material'

export default function RegisterForm({ setRegisterStatus }) {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const sendRegisterRequest = () => {
        const registerCredentials = JSON.stringify({
            name: userName,
            email: email,
            password: password
        })

        registerUser(registerCredentials)
            .then(response => setRegisterStatus({
                success: true,
                messages: [response.value]
            }))
            .catch(error => setRegisterStatus({
                success: false,
                messages: error.response.data.value.map(errorMessage=>errorMessage.description)
            }))
    }

    const updateUserName = (event) => { setUserName(event.target.value) }
    const updateEmail = (event) => { setEmail(event.target.value) }
    const updatePassword = (event) => { setPassword(event.target.value) }

    return (
        <Grid container rowSpacing={1} columns={1} alignItems={'center'} direction={'column'}>
            <Grid item>
                <TextField variant='standard' label='Login' value={userName} onChange={updateUserName} />
            </Grid>
            <Grid item>
                <TextField variant='standard' label='Email' type='email' value={email} onChange={updateEmail} />
            </Grid>
            <Grid item>
                <TextField variant='standard' label='Password' type='password' value={password} onChange={updatePassword} />
            </Grid>
            <Grid item>
                <Button variant='contained' sx={{ marginTop: 4 }} onClick={sendRegisterRequest} >Register</Button>
            </Grid>
        </Grid>
    );
}
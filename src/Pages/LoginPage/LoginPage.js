import { useEffect, useState, useContext } from "react"

import { Link } from "react-router-dom";
import LoginForm from "./LoginForm"
import { Alert, Grid, Container, Typography } from "@mui/material"

export default function LoginPage() {
    const [loginStatus, setLoginStatus] = useState({
        isLoggedIn: false,
        statusMessages: []
    })

    const [alerts, setAlerts] = useState()

    useEffect(() => {
        if(!loginStatus.messages){return}

        const incomingAlerts = loginStatus.messages.map(message => <Alert
            severity={loginStatus.success ? "success" : "error"}>{message}</Alert>)
        setAlerts(incomingAlerts)
    }, [loginStatus])

    return (
        <Grid container rowSpacing={3} direction={'column'} alignItems={'center'} sx={{ p: 3 }}>
            <Grid item>
                <LoginForm setLoginStatus={setLoginStatus} />
            </Grid>
            <Grid item>
                <Link to="/register">
                    <Typography>Create account</Typography>
                </Link>
            </Grid>
            <Grid item>
                <Container>
                    {alerts}
                </Container>
            </Grid>
        </Grid>
    )
}
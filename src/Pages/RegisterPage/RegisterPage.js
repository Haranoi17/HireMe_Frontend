import { useEffect, useState } from "react"

import { Alert, Grid, Container } from "@mui/material"
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
    const [registerStatus, setRegisterStatus] = useState({
        success: false,
        messages: []
    })

    const [alerts, setAlerts] = useState()

    useEffect(() => {
        const incomingAlerts = registerStatus.messages.map(message => <Alert
            severity={registerStatus.success ? "success" : "error"}>{message}</Alert>)
        setAlerts(incomingAlerts)
    }, [registerStatus])

    return (
        <Grid container rowSpacing={3} direction={'column'} alignItems={'center'} sx={{ p: 3 }}>
            <Grid item>
                <RegisterForm setRegisterStatus={setRegisterStatus} />
            </Grid>
            <Grid item>
                <Container>
                    {alerts}
                </Container>
            </Grid>
        </Grid>
    )
}
import { useNavigate } from 'react-router-dom'
import { Button, Container, Typography } from '@mui/material'

export default function LandingPage() {
    const navigate = useNavigate()

    return (
        <Container>
            <Typography variant='h2'>Delegate work</Typography>
            <Typography variant='h6'>Find competent people willing to help you in your day to day tasks</Typography>
            <Button variant='contained' onClick={() => navigate('search')}>Hire</Button>
        </Container>
    )
}
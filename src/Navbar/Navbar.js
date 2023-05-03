import { Navigate, useNavigate } from "react-router";
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';

import { useContext, useEffect } from "react";
import { LoginContext } from "../Contexts/LoginContext";

export default function NavBar() {
    const navigate = useNavigate()
    const context = useContext(LoginContext)

    useEffect(()=>{console.log(context.isLoggedIn)})
    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton color="inherit" onClick={() => { navigate("/") }}>
                    <HomeIcon />
                </IconButton>

                <Typography sx={{ flexGrow: 1 }}></Typography>

                {
                    context.value?
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}>
                            <LogoutIcon />
                        </IconButton>
                        :
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => { navigate('/login') }}>
                            <LoginIcon />
                        </IconButton>

                }
            </Toolbar>
        </AppBar>
    );
};
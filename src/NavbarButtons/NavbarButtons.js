import { Link } from "react-router-dom";
import { logoutUser } from "../ApiRoutes";

export function LogoutButton({ setIsLoggedIn }) {
    return (
        <button onClick={() => {
            logoutUser()
            setIsLoggedIn(false)
        }}>logout</button>
    );
}

export function LoginButton() {
    return (
        <Link to='login'>
            <button>login</button>
        </Link>
    );
}

export function RegisterButton() {
    return (
        <Link to='register'>
            <button>register</button>
        </Link>
    );
}

export function UserPanelButton({ userName }) {
    return (
        <Link to='userPanel'>
            <button>{userName}</button>
        </Link>
    );
}
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../ApiRoutes";
import { getDefaultAvatarIfNotSet } from "../Globals";

export function LogoutButton({ setIsLoggedIn }) {
    const navigate = useNavigate()

    return (
        <button onClick={() => {
            logoutUser()
            setIsLoggedIn(false)
            navigate('/')
        }}>logout</button>
    );
}

export function LoginButton() {
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate('login')}>login</button>
    );
}

export function RegisterButton() {
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate('register')}>register</button>
    );
}

export function UserPanelButton({ user }) {
    const navigate = useNavigate()

    const { avatarUrl, name } = user;
    return (
        <div className="UserButtonWithAvatar">
            <img className="UserAvatar" alt='' src={getDefaultAvatarIfNotSet(avatarUrl)}/>
            <button onClick={() => navigate('userPanel')}>{name}</button>
        </div>
    );
}
import './Navbar.css'

export default function Navbar({ logo, loginButton, registerButton, userPanelButton, logoutButton, isLoggedIn }) {
    const buttons = isLoggedIn ?
        <div className='Buttons'>
            {userPanelButton}
            {logoutButton}
        </div> : 
        <div className='Buttons'>
            {loginButton}
            {registerButton}
        </div>


    return (
        <div className='Navbar'>
            {logo}
            {buttons}
        </div>
    );
};
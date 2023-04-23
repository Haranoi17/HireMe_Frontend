import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar({loggedInLoggedOutRenderBrancher}) {
    return (
        <div className='Navbar'>
            <Link to='/'>
                <button className='Logo'>
                    <p>_</p><p className='LogoHire'>Hire</p><p className='LogoMe'>Me</p>
                </button>
            </Link>
            {loggedInLoggedOutRenderBrancher}
        </div>

    );
};
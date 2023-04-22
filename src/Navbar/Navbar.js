import './Navbar.css'
import {FaHeart, FaJava} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='Navbar'>
            <Link to='/'>
                <button className='Logo'>
                  <p>_</p><p className='LogoHire'>Hire</p><p className='LogoMe'>Me</p>
                </button>
            </Link>
            <div className='Buttons'>
                <Link to='login'>
                    <button>login</button>
                </Link>
                <Link to='/register'>
                    <button>register</button>
                </Link>
            </div>
        </div>

    );
};
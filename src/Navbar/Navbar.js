import './Navbar.css'

import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='Navbar'>
            <Link to='/'>
                <div className='Logo'>
                    _HireMe
                </div>
            </Link>
            <div className='Buttons'>
                <Link to='login'>
                    <button>login</button>
                </Link>
                <Link to='register'>
                    <button>register</button>
                </Link>
            </div>
        </div>

    );
};
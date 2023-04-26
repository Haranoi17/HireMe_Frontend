import { Link } from "react-router-dom"

export default function HireMeLogo() {
    return (
    <Link to='/'>
        <button className='Logo'>
            <p>_</p><p className='LogoHire'>Hire</p><p className='LogoMe'>Me</p>
        </button>
    </Link>)
}
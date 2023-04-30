import './LandingPage.css'
import './LandingPageAnimations.css'
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const navigate = useNavigate()

    return (
        <div className='LandingPage'>
            <div className='MainSection'>
                <div className='BackgroundImage'></div>
                <div className='MainSectionContent'>
                    <div className='Incentive'>
                        <h1>Delegate work</h1>
                        <p>Find competent people willing to help you in your day to day tasks</p>
                    </div>
                    <button onClick={() => navigate('search')}>Hire</button>
                </div>
            </div>
        </div>
    )
}
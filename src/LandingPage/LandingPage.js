import './LandingPage.css'
import './LandingPageAnimations.css'
import { Link } from 'react-router-dom'

export default function LandingPage(){

    return(
        <div className='LandingPage'>
            <div className='MainSection'>
                <div className='BackgroundImage'></div>
                <div className='MainSectionContent'>
                    <div className='Incentive'>
                        <h1>Delegate work</h1>
                        <p>Find competent people willing to help you in your day to day tasks</p>
                    </div>
                    <Link className='link' to='/search'>
                        <button>Hire</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
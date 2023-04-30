import { useEffect, useState } from 'react'
import './UserPanel.css'
import OfferTile from '../OfferTile/OfferTile'
import { getLoggedInUserOffers } from '../ApiRoutes'
import CreateOfferPopup from '../CreateOfferPopup/CreateOfferPopup'
import SetAvatarImagePopup from '../SetAvatarImagePopup/SetAvatarImagePopup'

export default function UserPanel({ userAccount }) {
    const [userOffersTiles, setUserOffersTiles] = useState()
    const [shouldShowSetAvatarPopup, setShouldShowSetAvatarPopup] = useState(false)
    const [shouldShowOfferCreationPopup, setShouldShowOfferCreationPopup] = useState(false)

    useEffect(() => {
        getLoggedInUserOffers()
            .then(response => setUserOffersTiles(response.map(OfferWithUser => <OfferTile key={OfferWithUser.offer.id} offer={OfferWithUser.offer} />)))
            .catch(error => console.log(error))
    }, [])

    const showCreateOfferPopup = () => {
        setShouldShowOfferCreationPopup(true)
    }
    const showSetAvatarPopup = () => {
        setShouldShowSetAvatarPopup(true)
    }

    return (
        <div className='UserPanel'>
            <div className='UserView'>
                <img alt='' src={userAccount.avatarUrl} onClick={showSetAvatarPopup}/>
                <p>{userAccount.name}</p>
            </div>

            <button onClick={showCreateOfferPopup}>Create new offer</button>
            <button onClick={showSetAvatarPopup}>set avatar</button>
            <CreateOfferPopup shouldShow={shouldShowOfferCreationPopup} setShouldShow={setShouldShowOfferCreationPopup} />
            <SetAvatarImagePopup shouldShow={shouldShowSetAvatarPopup} setShouldShow={setShouldShowSetAvatarPopup} userAccount={userAccount} />

            <div className='UserOffersSegment'>
                <p>Your offers</p>
                <div className='UserOffers'>
                    {userOffersTiles}
                </div>
            </div>
        </div>
    )
}
import { useEffect, useState } from 'react'
import './UserPanel.css'
import getMockOffers from '../MockData/MockOffers'
import OfferTile from '../OfferTile/OfferTile'
import getImageIfNoSet from '../Globals'
import { createOffer, getLoggedInUserOffers } from '../ApiRoutes'

export default function UserPanel({userAccountInfo}) {
    const [userOffersTiles, setUserOffersTiles ] = useState()

    useEffect(()=>{
        getLoggedInUserOffers()
        .then(response => setUserOffersTiles(response.map(offer=><OfferTile imageUrl={getImageIfNoSet(offer.imageUrl)} title={offer.title}/>)))
        .catch(error=>console.log(error))
    }, [])

    const mockOfferCreation = ()=>{
        const mockCreateOfferDto =JSON.stringify({
            title:"Mock offer",
            imageUrl:"https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfHwwfHw%3D&w=1000&q=80",
            description: "I will do orange blue for you",
            prize: 25
        } )

        createOffer(mockCreateOfferDto)
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
    }

    return (
        <div className='UserPanel'>
            <h1>{userAccountInfo.name}</h1>
            <div>
                {userOffersTiles}
            </div>
            <button onClick={mockOfferCreation}></button>
        </div>
    )
}
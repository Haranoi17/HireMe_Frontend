import React from 'react';
import { useNavigate } from 'react-router';
import { getDefaultOfferImageIfNotSet } from '../Globals';

export default function OfferTile({ offer }) {
    const navigate = useNavigate()

    const { title, imageUrl, prize } = offer

    return (
        <button onClick={() => navigate('/offerPage', { state: { offer: offer } })}>
            <div className='offerBox'>
                <img alt='' src={getDefaultOfferImageIfNotSet(imageUrl)} />
                <p className='title'>{title}</p>
                <p>{prize ? `Prize: ${prize}$` : "Free"}</p>
            </div>
        </button>
    );
}
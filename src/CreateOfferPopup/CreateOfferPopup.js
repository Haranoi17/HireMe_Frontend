import { useState } from "react"
import { createOffer } from "../ApiRoutes"
import OfferTile from "../OfferTile/OfferTile"
import OfferForm from '../OfferForm/OfferForm'
import PopupWrapper from "../PopupWrapper/PopupWrapper"

export default function CreateOfferPopup({ shouldShow, setShouldShow }) {
    const [offer, setOffer] = useState({})

    const offerCreation = () => {
        createOffer(JSON.stringify(offer))
            .then(response => console.log(response))
            .catch(error => console.error(error))
    }

    return (<PopupWrapper shouldShow={shouldShow} setShouldShow={setShouldShow} content={
        (
        <div>
            <h1>Provide data for your offer</h1>
            <OfferForm onSubmit={offerCreation} setOffer={setOffer} />
            <h2>Offer preview</h2>
            <OfferTile offer={offer} />
        </div>
        )}
    />)
} 
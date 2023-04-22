import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import Offer from "../Offer/Offer"
import getMockOffers from "../MockData/MockOffers"
import './OfferSearcher.css'

export default function OfferSearcher() {
    const [searchResult, setSearchResult] = useState([])
    const [offers, setOffers] = useState([])

    const resultsToOfferObjects = () => {
        setOffers(searchResult.map(receivedOffer => <Link to="offerPage" state={{receivedOffer}}><Offer key={receivedOffer} offer={receivedOffer}/></Link>));
    }

    useEffect(resultsToOfferObjects, [searchResult])

    return (
        <div className="offersSearcher">
            <div className="verticalSpace"></div>
            <SearchBar offers={getMockOffers(6)} setSearchResult={setSearchResult} />
            <div className="verticalSpace"></div>
            <div className="offersContainer">
                {offers}
            </div>
        </div>
    )
}
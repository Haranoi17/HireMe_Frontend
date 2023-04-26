import './OfferSearcher.css'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import OfferTile from "../OfferTile/OfferTile"

import getMockOffers from "../MockData/MockOffers"
import getImageIfNoSet from '../Globals'


export default function OfferSearcher() {
    const [searchResult, setSearchResult] = useState([])
    const [offers, setOffers] = useState([])

    const resultsToOfferTiles = () => {
        setOffers(searchResult.map(offer => {
            return (
                <Link to="offerPage" state={{ offer }}>
                    <OfferTile key={offer} imageUrl={getImageIfNoSet(offer.imageUrl)} title={offer.title} />
                </Link>
            )
        })
        );
    }

    useEffect(resultsToOfferTiles, [searchResult])

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
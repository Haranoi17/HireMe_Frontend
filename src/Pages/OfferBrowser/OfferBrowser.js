import { useState, useEffect } from "react"
import SearchBar from "../../SearchBar/SearchBar"
import OfferTile from "../../OfferTile/OfferTile"

import { getAllOffers } from '../../ApiRoutes'


export default function OfferBrowser() {
    const [loadedOffers, setLoadedOffers] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [offers, setOffers] = useState([])

    const resultsToOfferTiles = () => {
        setOffers(searchResult.map(offerWithUser =><OfferTile key={offerWithUser.offer.id} offer={offerWithUser.offer} />)
        );
    }

    const loadOffers = ()=>{
        getAllOffers()
        .then(result=>{
            setLoadedOffers(result)
            setSearchResult(result)
            resultsToOfferTiles()
        })
        .catch(error=>console.error(error))
    }
    
    useEffect(loadOffers, [])
    useEffect(resultsToOfferTiles, [searchResult])

    return (
        <div className="offersSearcher">
            <div className="verticalSpace"></div>
            <SearchBar offers={loadedOffers} setSearchResult={setSearchResult} />
            <div className="verticalSpace"></div>
            <div className="offersContainer">
                {offers}
            </div>
        </div>
    )
}
import './SearchBar.css'
import { useEffect, useState } from "react"

export default function SearchBar({ offers, setSearchResult }) {
    const [searchInput, setSearchInput] = useState('')

    const updateInput = (event) => { setSearchInput(event.target.value) }

    const updateResults = () => {
        if (!searchInput) { return setSearchResult(offers) }

        const filteredOffers = offers.filter(offer => offer.title.includes(searchInput))
        setSearchResult(filteredOffers)
    }

    useEffect(updateResults, [searchInput])

    return (<input className='searchBar' type='text' placeholder='Search' value={searchInput} onChange={updateInput} />)
}
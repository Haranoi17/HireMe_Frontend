import { useState, useEffect } from "react"

export default function OfferForm({ onSubmit, setOffer }) {
    const [title, setTitle] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [description, setDescription] = useState("")
    const [prize, setPrize] = useState("")


    const updateTitle = (event) => { setTitle(event.target.value) }
    const updateImageUrl = (event) => { setImageUrl(event.target.value) }
    const updateDescription = (event) => { setDescription(event.target.value) }
    const updatePrize = (event) => {
        const prizeValue = event.target.value
        if (!prizeValue) {
            setPrize(null)
            return
        }

        const prizeFloatValue = parseFloat(prizeValue)
        prizeFloatValue < 0.0 ? setPrize(0) : setPrize(prizeFloatValue)
    }

    const updateOffer = () => {
        setOffer({
            title: title,
            imageUrl: imageUrl,
            description: description,
            prize: prize
        })
    }

    useEffect(updateOffer, [title, imageUrl, description, prize])

    return (
        <form onSubmit={onSubmit}>
            <label>Title</label>
            <input type="text" onChange={updateTitle} required />

            <label>ImageUrl</label>
            <input type="text" onChange={updateImageUrl} />

            <label>Description</label>
            <textarea onChange={updateDescription} />

            <label>Prize</label>
            <input type="number" step={0.01} placeholder="Prize" value={prize} onChange={updatePrize} required />

            <button type="submit">create</button>
        </form>
    )
}
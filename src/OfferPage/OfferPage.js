import './OfferPage.css'
import { useLocation } from "react-router";

export default function OfferPage() {
    const location = useLocation();
    const { receivedOffer } = location.state;
    const { imageUrl, title, description } = receivedOffer;
    return (
        <div className='offer'>
            <h1>{title}</h1>
            <img src={imageUrl} />
            <p>{description}</p>
        </div>
    )
}
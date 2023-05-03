import { useLocation } from "react-router";

export default function OfferPage() {
    const location = useLocation();
    const { title, imageUrl, description, prize } = location.state.offer;
    return (
        <div className='offer'>
            <h1>{title}</h1>
            <img src={imageUrl} />
            <p>{description}</p>
            {prize}
        </div>
    )
}
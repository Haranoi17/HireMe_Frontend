import './OfferTile.css'

export default function OfferTile({ imageUrl, title }) {
    return (
        <div className='offerBox'>
            <img src={imageUrl} />
            <p className='title'>{title}</p>
        </div>);
}
import './Offer.css'

export default function Offer({offer}){
    const {imageUrl, title, description} = offer
    
    return (
    <div className='offerBox'>
        <img src={imageUrl}/>
        <p className='title'>{title.slice(0,30)}</p>
    </div>);
}
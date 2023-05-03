export default function CreateOfferPopup({ shouldShow, setShouldShow, content }) {
    const closePopup = () => {
        setShouldShow(false)
    }

    return (shouldShow) ? (
        <div className='PopupContainer'>
            <div className='PopupInnerContainer'>
                {content}
                <button onClick={closePopup}>close</button>
            </div>
        </div>
    ) : "";
} 
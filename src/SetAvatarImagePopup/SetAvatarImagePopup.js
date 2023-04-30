import { useEffect, useState } from "react";
import { updateUser } from "../ApiRoutes";

import PopupWrapper from '../PopupWrapper/PopupWrapper'

export default function SetAvatarImagePopup({ shouldShow, setShouldShow, userAccount }) {
    const [avatarUrl, setAvatarUrl] = useState()

    const sendUpdateRequest = async () => {
        const userWithNewAvatar = swapAvatarUrl(userAccount, avatarUrl)
        updateUser(userWithNewAvatar)
        .then(result=>console.log(result))
        .catch(error=>console.error(error))
    }

    const swapAvatarUrl = (user, newUrl) => {
        user.avatarUrl = newUrl
        return user;
    }

    const updateAvatarUrl = (event) => setAvatarUrl(event.target.value)

    useEffect(()=>{}, [avatarUrl])
    return (<PopupWrapper shouldShow={shouldShow} setShouldShow={setShouldShow} content={
        (
            <div>
                <label>AvatarUrl</label>
                <input type="text" onChange={updateAvatarUrl}></input>
                <h3>Image preview</h3>
                <img alt='' src={avatarUrl}/>
                <button onClick={sendUpdateRequest}>update</button>
            </div>
        )
    } />);
}
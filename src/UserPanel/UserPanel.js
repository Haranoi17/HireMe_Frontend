import './UserPanel.css'

export default function UserPanel({userAccountInfo}) {
    return (
        <div className='UserPanel'>
            <h1>{userAccountInfo.name}</h1>
        </div>
    )
}
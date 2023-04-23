import './ServerMessage.css'

export default function ServerMessagePrinter({messages}){
    return(
        <div className='ServerMessagesContainer'>
            {messages}
        </div>
    )
}
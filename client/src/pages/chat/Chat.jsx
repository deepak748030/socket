import React from 'react'
import './chat.css'
const Chat = () => {
    return (
        <>
            <div className="chat-container">
                <div className="messages">
                    <div className="message">Hello!</div>
                    <div className="message">How are you?</div>
                    <div className="message">I'm good, thanks!</div>
                </div>
                <div className="input-container">
                    <input type="text" placeholder="Type your message..." />
                    <button>Send</button>
                </div>
            </div>


        </>
    )
}

export default Chat
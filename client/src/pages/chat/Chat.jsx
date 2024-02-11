import React, { useEffect, useState } from 'react';
import './chat.css';
import socketIO from 'socket.io-client';

const ENDPOINT = 'http://localhost:3000/';

const Chat = () => {
    const [socket, setSocket] = useState(null);
    const [chat, setChat] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const newSocket = socketIO(ENDPOINT, { transports: ["websocket"] });
        setSocket(newSocket);

        // Clean up socket connection on component unmount
        return () => {
            newSocket.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!socket) return;

        // Listen for incoming messages
        socket.on('chat message', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        // Clean up message event listener on component unmount
        return () => {
            socket.off('chat message');
        };
    }, [socket]);

    const sendMsg = () => {
        if (!socket) return;

        socket.emit('chat message', chat);
        setChat('');
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">{msg}</div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={chat}
                    onChange={(e) => setChat(e.target.value)}
                />
                <button onClick={sendMsg}>Send</button>
            </div>
        </div>
    );
};

export default Chat;

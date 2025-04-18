import React, { useState, useEffect } from 'react';
import { fetchMessages, sendMessage } from '../services/api';
import { Message } from '../types';

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const loadMessages = async () => {
            const fetchedMessages = await fetchMessages();
            setMessages(fetchedMessages);
        };

        loadMessages();
    }, []);

    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            const message: Message = {
                content: newMessage,
                timestamp: new Date(),
                userId: 'currentUserId', // Replace with actual user ID
            };
            await sendMessage(message);
            setMessages([...messages, message]);
            setNewMessage('');
        }
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        <span>{msg.userId}: </span>
                        <span>{msg.content}</span>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default Chat;
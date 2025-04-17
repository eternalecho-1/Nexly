import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

export const fetchMessages = async (channelId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/channels/${channelId}/messages`);
        return response.data;
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw error;
    }
};

export const sendMessage = async (channelId, message) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/channels/${channelId}/messages`, { message });
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};

export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};
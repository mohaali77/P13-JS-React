import axios from 'axios';

const API_URL = 'http://localhost:3000/';

export async function loginUser(userId) {
    try {
        const response = await axios.post(`${API_URL}user/${userId}`);
        return response.data
    } catch (error) {
    }
}

export async function updateUserProfile(userId) {
    try {
        const response = await axios.put(`${API_URL}user/${userId}/activity`);
        return response.data
    } catch (error) {
    }
}


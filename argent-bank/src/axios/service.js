import axios from 'axios';

const API_URL = 'http://localhost:3000/';

export async function loginUser() {
    try {
        const response = await axios.post(`${API_URL}login`);
        return response.data
    } catch (error) {
    }
}

export async function getUserProfile() {
    try {
        const response = await axios.post(`${API_URL}profile`);
        return response.data
    } catch (error) {
    }
}

export async function updateUserProfile() {
    try {
        const response = await axios.put(`${API_URL}profile`);
        return response.data
    } catch (error) {
    }
}


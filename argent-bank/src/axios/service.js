import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/user/';

// ...

export async function loginUser(userCredentials) {
    try {
        const response = await axios.post(`${API_URL}login`, userCredentials, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la connexion', error);
        throw error;
    }
}

// ...


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



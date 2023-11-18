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
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la connexion', error);
        throw error;
    }
}


export async function getUserProfile(token) {
    try {
        const response = await axios.post(`${API_URL}profile`, {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la connexion', error);
        throw error;
    }
}

export async function updateUserProfile(token, userName) {
    try {
        const response = await axios.put(`${API_URL}profile`, userName, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la connexion', error);
        throw error;
    }
}



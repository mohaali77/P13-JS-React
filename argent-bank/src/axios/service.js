import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/user/';

//Requête pour se connexion
export async function loginUser(userCredentials) {
    try {
        const response = await axios.post(`${API_URL}login`, userCredentials, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la connexion', error);
        throw error;
    }
}

//Requête pour récupérer les données de l'utilisateur
export async function getUserProfile(token) {
    try {
        const response = await axios.post(`${API_URL}profile`, {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Erreur lors de la connexion', error);
        throw error;
    }
}

//Requête pour modifier le nom et prénom de l'utilisateur
export async function updateUserProfile(token, userName) {
    try {
        const response = await axios.put(`${API_URL}profile`, userName, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Erreur lors de la connexion', error);
        throw error;
    }
}



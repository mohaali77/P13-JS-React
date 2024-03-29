import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { getUserProfile } from '../axios/service';

// fonction qui permet de récupérer constamment les données de l'utilisateur avec une requête 
// si un token est présent dans le localStorage
export function GetUserInState() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');

                if (token) {
                    const response = await getUserProfile(token);

                    if (response) {
                        dispatch(
                            login({
                                firstName: response.body.firstName,
                                lastName: response.body.lastName,
                                id: response.body.id,
                                email: response.body.email,
                                password: response.body.password,
                                token: token,
                                isConnected: true,
                            })
                        );
                    }
                }
            } catch (error) {
                console.error('Erreur lors de la récupération du profil', error);
            }
        };

        fetchData();
    }, [dispatch]);
}

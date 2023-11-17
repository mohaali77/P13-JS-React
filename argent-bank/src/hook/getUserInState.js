import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { getUserProfile } from '../axios/service';

export function GetUserInState() {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            getUserProfile(token)
                .then((response) => {
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
                })
                .catch((error) => {
                    console.error('Erreur lors de la récupération du profil', error);
                });
        }
    }, [dispatch]);
}

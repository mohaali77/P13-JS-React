import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../features/userSlice";
import { loginUser } from "../../axios/service";
import { getUserProfile } from "../../axios/service";
import HeaderLogin from "../../components/header/header-login";
import HeaderLogout from "../../components/header-logout/header-logout";


export default function SignIn() {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const userState = useSelector(selectUser)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await loginUser({ "email": user, "password": password, });

            if (response) {
                localStorage.setItem('token', response.body.token);
                let token = localStorage.getItem('token');

                const response1 = await getUserProfile(token);

                if (response1) {
                    dispatch(
                        login({
                            firstName: response1.body.firstName,
                            lastName: response1.body.lastName,
                            id: response1.body.id,
                            email: user,
                            password: password,
                            token: response.body.token,
                            isConnected: true,
                        })
                    );
                    navigate(`/user/${response1.body.id}`)
                }


            }

        } catch (error) {
            console.error('Erreur lors de la connexion', error);
        }
    }

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

    return (
        <>

            <HeaderLogin />
            {userState && userState.isConnected ? navigate(`/user/${userState.id}`) :
                <main className="main bg-dark">
                    <section className="sign-in-content">
                        <i className="fa fa-user-circle sign-in-icon"></i>
                        <h1>Sign In</h1>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="input-wrapper">
                                <label htmlFor="username">Username</label>
                                <input
                                    onChange={(e) => setUser(e.target.value)}
                                    type="text"
                                    id="username"
                                    value={user}
                                    required
                                />
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                />
                            </div>
                            <div className="input-remember">
                                <input type="checkbox" id="remember-me" />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                            <button type="submit" className="sign-in-button">Sign In</button>
                        </form>
                    </section>
                </main >
            }
        </>
    );
}

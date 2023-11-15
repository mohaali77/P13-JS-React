import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../features/userSlice";
import { loginUser } from "../../axios/service";
import HeaderLogin from "../../components/header-login/header-login";
import { useNavigate } from "react-router-dom";
import HeaderLogout from "../../components/header-logout/header-logout";


export default function SignIn() {
    const navigate = useNavigate()
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isUserConnected = useSelector(selectUser)

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(user, password);

        try {
            const response = await loginUser({
                "email": user,
                "password": password,
            }
            );

            if (response) {
                dispatch(
                    login({
                        name: user,
                        password: password,
                    })
                );
                console.log('Connexion réussie');
                navigate('/user')

            }

        } catch (error) {
            console.error('Erreur lors de la connexion', error);
        }
    }

    return (
        <>
            {isUserConnected ? <HeaderLogout /> : <HeaderLogin />}
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
        </>
    );
}

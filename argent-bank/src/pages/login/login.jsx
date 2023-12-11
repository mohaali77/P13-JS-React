import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../features/userSlice";
import { loginUser } from "../../axios/service";
import { getUserProfile } from "../../axios/service";
import { GetUserInState } from "../../hook/getUserInState";


export default function Login() {
    GetUserInState();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const userState = useSelector(selectUser);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await loginUser({ "email": user, "password": password });

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
                }
            }
        } catch (error) {
            // Gestion des erreurs 
            console.error('Les identifiants sont incorrects', error);
            //On 
            setError("Identifiants incorrects.");
        }
    }

    return (
        <>
            {userState && userState.isConnected ? (
                navigate(`/profile/${userState.id}`)
            ) : (
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
                            <div id="errorMsg">{error ? <p>{error}</p> : null}</div>
                            <div className="input-remember">
                                <input type="checkbox" id="remember-me" />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                            <button type="submit" className="sign-in-button">
                                Sign In
                            </button>
                        </form>
                    </section>
                </main>
            )}
        </>
    );
}
aaaaaaaaaaaaa

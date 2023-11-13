import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import HeaderLogin from "../../components/header-login/header-login";

export default function SignIn() {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user, password);
        dispatch(
            login({
                name: user,
                password: password,
                loggedIn: true,
            })
        )
    }

    return (
        <>
            <HeaderLogin />
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

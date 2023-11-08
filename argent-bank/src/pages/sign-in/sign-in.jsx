import { Link } from "react-router-dom";
import HeaderLogin from "../../components/header-login/header-login";
import { useEffect, useState } from "react";

export default function SignIn() {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    useEffect(() => {
        userRef.current.focus()
    }, [])

    const [showErrorEmailMsg, setShowErrorEmailMsg] = useState(false);
    const [email, setEmail] = useState('');



    return (
        <>
            <HeaderLogin />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input
                                ref={userRef}
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
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />

                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <Link to="/user" className="sign-in-button">
                            Sign In
                        </Link>
                        <p ref={errRef} className={errMsg ? 'errmsg' : "offscreen"} aria-live='assertive'>{errMsg}</p>
                    </form>
                </section>
            </main>
        </>
    );
}

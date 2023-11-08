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
    }, [])

    const [showErrorEmailMsg, setShowErrorEmailMsg] = useState(false);
    const [email, setEmail] = useState('');

    function isFormValid(e) {
        e.preventDefault();

        let isFormValid = true;
        const regexEmail = new RegExp(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/);

        if (email === '' || !regexEmail.test(email)) {
            isFormValid = false;
            setShowErrorEmailMsg(true);
        } else {
            setShowErrorEmailMsg(false);
        }

        if (isFormValid === true) {
            console.log('Le formulaire est valide !');
        } else {
            console.log('Le formulaire est invalide !');
        }

        return isFormValid;
    }

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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                id="username"
                            />
                            {showErrorEmailMsg ? (
                                <div className="errorLogin">L'e-mail n'est pas valide</div>
                            ) : (
                                <div className="errorLogin"></div>
                            )}
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />

                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <Link to="/user" onClick={isFormValid} className="sign-in-button">
                            Sign In
                        </Link>
                    </form>
                </section>
            </main>
        </>
    );
}

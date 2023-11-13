import HeaderLogin from "../../components/header-login/header-login";
import { useEffect, useState, useRef } from "react";

export default function SignIn() {

    const userRef = useRef();
    //const errRef = useRef();


    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    //const [errMsg, setErrMsg] = useState('')

    useEffect(() => {
        userRef.current.focus()
    }, [])

    /*useEffect(() => {
        setErrMsg('')
    }, [user, pwd])*/


    useEffect(() => {
        userRef.current.focus()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(user, pwd)
        // gestion des regex
        let regexEmail = new RegExp(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/);

        if (user || regexEmail.test(user) === false) {
            alert("l'adresse mail n'est pas valide")
        }

        setUser('')
        setPwd('')
    }

    return (
        <>
            <HeaderLogin />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
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
                        <button className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
        </>
    );
}

import { Link } from "react-router-dom";
import HeaderLogin from "../../components/header-login/header-login";
import { useEffect, useRef } from "react";

export default function SignIn() {

    let showErrorMsg = useRef(false)
    let refEmail = useRef(null)
    let email = refEmail.current


    function isFormValid(e) {

        let isFormValid = true

        e.preventDefault()
        console.log(email.value);

        if (isFormValid === true) {
            console.log('le formulaire est valide !');
        } else {
            e.preventDefault()
            console('le formulaire est invalide !')
        }
    }

    // Utilisez useEffect pour effectuer des opérations après le rendu
    useEffect(() => {
        // Accédez à l'élément DOM en utilisant la référence
    }, []);




    return <>
        <HeaderLogin />
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input ref={refEmail} type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                        {showErrorMsg.current ? <div className="errorLogin">L'email ou le mot de passe est incorrect</div>
                            : null}

                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <Link to="/user" onClick={isFormValid} className="sign-in-button">Sign In</Link>
                    { // <button class="sign-in-button">Sign In</button> -->
                    }
                </form>
            </section>
        </main>
    </>
}
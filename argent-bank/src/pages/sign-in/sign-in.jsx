import { Link } from "react-router-dom";
import HeaderLogin from "../../components/header-login/header-login";
import { useState, useRef } from "react";

export default function SignIn() {

    let showErrorMsg = useRef(false)
    let showErrorEmailMsg = useRef(false)
    const [email, setEmail] = useState(''); // Utilisez useState pour gérer l'e-mail



    function isFormValid(e) {
        let isFormValid = true

        e.preventDefault()

        console.log(email)

        //on définit notre regex qui définira les conditions de validations du prenom 
        let regexEmail = new RegExp(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/);

        if (email === '' || regexEmail.test(email) === false) {
            isFormValid = false
            showErrorEmailMsg = true
        }

        if (isFormValid === true) {
            console.log('le formulaire est valide !');
        } else {
            console.log('le formulaire est invalide !')
            showErrorMsg.current = true
        }

        return isFormValid
    }

    /*// Utilisez useEffect pour effectuer des opérations après le rendu
    useEffect(() => {
        // Accédez à l'élément DOM en utilisant la référence
    }, []);*/


    return <>
        <HeaderLogin />
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="username" />
                        {showErrorEmailMsg.current ? <div className="errorEmail">L'email n'est pas valide</div>
                            : <div className="errorEmail"></div>}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                        {showErrorMsg.current ? <div className="errorLogin">L'email ou le mot de passe est incorrect</div>
                            : <div className="errorLogin"></div>}

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
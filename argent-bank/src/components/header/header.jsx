import argentBankLogo from '../../img/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { selectUser } from '../../features/userSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/userSlice'

export default function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector(selectUser);

    //fonction de deconnexion de l'utilisateur
    const Logout = (e) => {

        e.preventDefault()

        //on supprime le localStorage
        localStorage.clear()

        //on supprime l'utilisateur du state
        dispatch(
            logout({
                user: null
            })
        );

        //on redirige vers la page d'accueil
        navigate('/')
    }

    return <>
        <nav className="main-nav">
            <Link to='/' className="main-nav-logo" >
                <img className="main-nav-logo-image" src={argentBankLogo} alt="" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            {
                //si l'utilisateur est connecté, on affiche le nom de l'utilisateur avec un lien vers le profil 
                //et un bouton de déconnexion
                userState && userState.isConnected ?
                    <>
                        <div >
                            <Link className="main-nav-item" to={`profile/${userState.id}`} >
                                <i className="fa fa-user-circle"></i>
                                {' ' + userState.firstName}
                            </Link>

                            <Link onClick={Logout} className="main-nav-item">
                                <i className="fa fa-sign-out"></i>
                                {' Sign Out'}
                            </Link>
                        </div>
                    </>
                    :

                    //sinon on met un simple lien vers la page de connexion
                    <div>
                        <Link to='/login' className="main-nav-item" >
                            <i className="fa fa-user-circle"></i>
                            {' Sign In'}
                        </Link>
                    </div>
            }
        </nav>
    </>
}
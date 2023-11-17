import argentBankLogo from '../../img/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { selectUser } from '../../features/userSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/userSlice'

export default function HeaderLogin() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector(selectUser);

    const Logout = (e) => {

        console.log("a");

        localStorage.clear()

        dispatch(
            logout({
                user: null
            })
        );

        navigate('/sign-in')
    }

    return <>
        <nav className="main-nav">
            <Link to='/' className="main-nav-logo" >
                <img className="main-nav-logo-image" src={argentBankLogo} alt="" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            {userState && userState.isConnected ?

                <div onClick={Logout} class="main-nav-item">
                    <i class="fa fa-sign-out"></i>
                    Sign Out
                </div>

                :

                <div>
                    <Link to='/sign-in' className="main-nav-item" >
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            }
        </nav>
    </>
}
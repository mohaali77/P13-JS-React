import argentBankLogo from '../../img/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { logout } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


export default function HeaderLogout() {
    const navigate = useNavigate()
    const dispatch = useDispatch();

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
        <nav class="main-nav">
            <Link to='/' className="main-nav-logo" >
                <img className="main-nav-logo-image" src={argentBankLogo} alt="" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link to='/user' class="main-nav-item">
                    <i class="fa fa-user-circle"></i>
                    Tony
                </Link>
                <div onClick={Logout} class="main-nav-item">
                    <i class="fa fa-sign-out"></i>
                    Sign Out
                </div>
            </div>
        </nav >
    </>
}
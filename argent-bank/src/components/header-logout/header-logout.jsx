import argentBankLogo from '../../img/argentBankLogo.png'
import { Link } from 'react-router-dom'

export default function HeaderLogout() {
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
                <Link to='/' class="main-nav-item">
                    <i class="fa fa-sign-out"></i>
                    Sign Out
                </Link>
            </div>
        </nav>
    </>
}
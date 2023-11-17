import Account from "../../components/account/account";
import { GetUserInState } from "../../hook/getUserInState";


export default function User() {
    GetUserInState()
    return <>
        <main className="main-user bg-dark">
            <div class="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button class="edit-button">Edit Name</button>
            </div>
            <Account title='Argent Bank Checking' description='Available Balance' />
            <Account title='Argent Bank Savings' description='Available Balance' />
            <Account title='Argent Bank Credit Card' description='Current Balance' />
        </main>

    </>
}
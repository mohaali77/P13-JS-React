import Account from "../../components/account/account";
import { GetUserInState } from "../../hook/getUserInState";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { updateUserProfile } from "../../axios/service";


export default function Profile() {
    const userState = useSelector(selectUser)
    GetUserInState()

    async function handleEdit() {
        const response = await updateUserProfile(userState.token, { "email": 'test', "password": 'test', });
    }

    return <>
        <main className="main-user bg-dark">
            <div class="header">
                <h1>Welcome back<br />{userState && userState.isConnected ? userState.firstName + ' ' + userState.lastName + ' !' : null}</h1>
                <button onClick={handleEdit} class="edit-button">Edit Name</button>
            </div>
            <Account title='Argent Bank Checking' description='Available Balance' />
            <Account title='Argent Bank Savings' description='Available Balance' />
            <Account title='Argent Bank Credit Card' description='Current Balance' />
        </main>

    </>
}
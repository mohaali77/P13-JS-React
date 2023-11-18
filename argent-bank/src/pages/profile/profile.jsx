import Account from "../../components/account/account";
import { GetUserInState } from "../../hook/getUserInState";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { updateUserProfile } from "../../axios/service";


export default function Profile() {
    const userState = useSelector(selectUser)
    GetUserInState()

    async function handleEdit() {

        const response = await updateUserProfile(userState.token, { "firstName": 'test', "lastName": 'test', });
    }

    return <>
        <main className="main-user bg-dark">
            <div class="header">
                <h1>Welcome back<br />{userState && userState.isConnected ? userState.firstName + ' ' + userState.lastName + ' !' : null}</h1>
                <button onClick={handleEdit} class="edit-button">Edit Name</button>
                <form className="edit-name">
                    <div className="input-wrapper">
                        <label htmlFor="firstName">Username</label>
                        <input
                            //onChange={}
                            type="text"
                            id="firstName"
                            //value={user}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastName">Username</label>
                        <input
                            //onChange={}
                            type="text"
                            id="lastName"
                            //value={user}
                            required
                        />
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                    <button type="submit" className="sign-in-button">Sign In</button>

                </form>
            </div>
            <Account title='Argent Bank Checking' description='Available Balance' />
            <Account title='Argent Bank Savings' description='Available Balance' />
            <Account title='Argent Bank Credit Card' description='Current Balance' />
        </main>

    </>
}
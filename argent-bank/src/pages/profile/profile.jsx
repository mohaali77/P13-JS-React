import Account from "../../components/account/account";
import { GetUserInState } from "../../hook/getUserInState";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { hasExpectedRequestMetadata } from "@reduxjs/toolkit/dist/matchers";


export default function Profile() {
    const userState = useSelector(selectUser)
    GetUserInState()

    const handleEdit = (e) => {

    }

    return <>
        <main className="main-user bg-dark">
            <div class="header">
                <h1>Welcome back<br />{userState && userState.isConnected ? userState.firstName + ' ' + userState.lastName + ' !' : null}</h1>
                <button onClik={handleEdit} class="edit-button">Edit Name</button>
            </div>
            <Account title='Argent Bank Checking' description='Available Balance' />
            <Account title='Argent Bank Savings' description='Available Balance' />
            <Account title='Argent Bank Credit Card' description='Current Balance' />
        </main>

    </>
}
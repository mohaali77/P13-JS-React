import Account from "../../components/account/account";

export default function User() {
    return <>
        <main className="main-user bg-dark">
            <div class="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button class="edit-button">Edit Name</button>
            </div>
            <Account title='Argent Bank Checking' />
            <Account title='Argent Bank Savings' />
            <Account title='Argent Bank Credit Card' />
        </main>

    </>
}
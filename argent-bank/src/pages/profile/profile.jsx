import Account from "../../components/account/account";
import { GetUserInState } from "../../hook/getUserInState";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { updateUserProfile } from "../../axios/service";
import { useRef } from "react";


export default function Profile() {
    const editBtn = useRef(null)
    const editForm = useRef(null)

    const userState = useSelector(selectUser)
    GetUserInState()

    async function handleEdit() {

        const response = await updateUserProfile(userState.token, { "firstName": 'test', "lastName": 'test', });
        editBtn.current.classList.toggle('hide');
        editForm.current.classList.toggle('hide');
        console.log(editBtn.current);

    }

    return <>
        <main className="main-user bg-dark">
            <div class="header">
                <h1>Welcome back<br />{userState && userState.isConnected ? userState.firstName + ' ' + userState.lastName + ' !' : null}</h1>
                <button onClick={handleEdit} ref={editBtn} class="edit-button">Edit Name</button>
                <form className="edit-name hide" ref={editForm}>
                    <div className="input-edit">
                        <label htmlFor="firstName"></label>
                        <input
                            //onChange={}
                            type="text"
                            id="firstName"
                            placeholder={userState && userState.isConnected ? userState.firstName : null}
                            //value={user}
                            required
                        />

                        <label htmlFor="lastName"></label>
                        <input
                            //onChange={}
                            type="text"
                            id="lastName"
                            placeholder={userState && userState.isConnected ? userState.lastName : null}
                            //value={user}
                            required
                        />
                    </div>

                    <div className="button-wrap">
                        <button type="submit" className="save_cancel_button">Save</button>
                        <button type="submit" className="save_cancel_button">Cancel</button>
                    </div>

                </form>
            </div>
            <Account title='Argent Bank Checking' description='Available Balance' />
            <Account title='Argent Bank Savings' description='Available Balance' />
            <Account title='Argent Bank Credit Card' description='Current Balance' />
        </main>

    </>
}
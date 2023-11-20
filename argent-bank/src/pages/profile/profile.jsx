import Account from "../../components/account/account";
import { GetUserInState } from "../../hook/getUserInState";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { updateUserProfile } from "../../axios/service";
import { useRef, useState } from "react";


export default function Profile() {

    GetUserInState()

    const userState = useSelector(selectUser)
    const editBtn = useRef(null)
    const editForm = useRef(null)
    const [isEditing, setIsEditing] = useState(false);
    const [formFirstname, setFormFirstname] = useState('');
    const [formLastname, setFormLastname] = useState('');

    function showOrHideForm(e) {
        e.preventDefault()
        editForm.current.classList.toggle('hide');
        editBtn.current.classList.toggle('hide');
        setIsEditing(!isEditing);
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const userInfos = { "firstName": formFirstname, "lastName": formLastname, }
        await updateUserProfile(userState.token, userInfos);
        window.location.reload()
    }

    return <>
        <main className="main-user bg-dark">
            <div class="header">
                <h1>Welcome back<br />{userState && userState.isConnected ? userState.firstName + ' ' + userState.lastName + ' !' : null}</h1>
                <button onClick={showOrHideForm} ref={editBtn} className="edit-button">Edit Name</button>
                <form className="edit-name hide" ref={editForm}>
                    <div className="input-edit">
                        <label htmlFor="firstName"></label>
                        <input
                            onChange={(e) => { setFormFirstname(e.target.value) }}
                            type="text"
                            id="firstName"
                            placeholder={userState && userState.isConnected ? userState.firstName : null}
                            value={formFirstname}
                            required={isEditing}
                        />

                        <label htmlFor="lastName"></label>
                        <input
                            onChange={(e) => { setFormLastname(e.target.value) }}
                            type="text"
                            id="lastName"
                            placeholder={userState && userState.isConnected ? userState.lastName : null}
                            value={formLastname}
                            required={isEditing}
                        />
                    </div>

                    <div className="button-wrap">
                        <button onClick={handleSubmit} type="submit" className="save_cancel_button">Save</button>
                        <button onClick={showOrHideForm} className="save_cancel_button">Cancel</button>
                    </div>

                </form>
            </div>
            <Account title='Argent Bank Checking' description='Available Balance' />
            <Account title='Argent Bank Savings' description='Available Balance' />
            <Account title='Argent Bank Credit Card' description='Current Balance' />
        </main>

    </>
}
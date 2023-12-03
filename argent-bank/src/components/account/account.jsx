import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

export default function Account({ title, description, amountTony, amountSteve }) {
    const userState = useSelector(selectUser);


    return <>
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{userState && userState.isConnected ? userState.id === '65414dec790097046c23e7d5' ? amountTony : amountSteve : null}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>ZZZZZZZZZZZZZZZZZ
        </section>
    </>
}
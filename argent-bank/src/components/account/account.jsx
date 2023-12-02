import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

export default function Account({ title, description, amount }) {
    const userState = useSelector(selectUser);



    return <>
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    </>
}
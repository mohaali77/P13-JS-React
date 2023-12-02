import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

export default function Account({ title, description }) {
    const userState = useSelector(selectUser);

    const tonyArray = {
        number: 'x9444',
        amount: '1,000'

    }

    return <>
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">$1,000</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    </>
}
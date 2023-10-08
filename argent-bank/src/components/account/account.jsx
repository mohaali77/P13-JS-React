export default function Account({ title }) {
    return <>
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title} (x8349)</h3>
                <p className="account-amount">$2,082.79</p>
                <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    </>
}
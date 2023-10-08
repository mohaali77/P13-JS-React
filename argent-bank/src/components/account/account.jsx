export default function Account({ title, description }) {
    return <>
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title} (x8349)</h3>
                <p className="account-amount">$1,000</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    </>
}
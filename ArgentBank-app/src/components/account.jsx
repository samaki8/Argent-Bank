import PropTypes from 'prop-types';

function Account({ title, amount, description, suffix }) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title} ({suffix})</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    );
}

Account.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    suffix: PropTypes.string
};
export default Account;

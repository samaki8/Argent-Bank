import Header from './components/header';
import Footer from './components/footer';
import Account from './components/account';

function User() {
    return (
        <>
            <Header className="header" />

            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>

                {/* Utilisation du composant Account */}
                <Account title="Argent Bank Checking" amount="$2,082.79" description="Available Balance" suffix="x8349" />
                <Account title="Argent Bank Savings" amount="$10,928.42" description="Available Balance" suffix="x6712" />
                <Account title="Argent Bank Credit Card" amount="$184.30" description="Current Balance" suffix="x8349" />
            </main>
            <Footer className="footer" />
        </>
    );
}

export default User;

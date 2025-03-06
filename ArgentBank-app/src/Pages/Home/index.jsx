

function Home() {
    return (
        <main className="container">
            <section className="home">
                <h1 className="sr-only">Argent Bank</h1>
                <p className="home__sub">No fees. No minimum deposit. Unlimited cashback.</p>
                <img src={hero} alt="Hero" className="home__img" />
            </section>
        </main>
    );
}
export default Home;
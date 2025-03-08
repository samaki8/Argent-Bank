import React from 'react';
import FeatureItem from '../../components/feature-item';
import Footer from '../../components/footer';
import Header from '../../components/header';

function Home() {
    return (
        <div>
            <Header />
            <main>
                <div className="hero">
                    <section className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <FeatureItem
                        className="feature-item"
                        title="You are our #1 priority"
                        image="./src/img/icon-chat.png"
                        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                    />
                    <FeatureItem
                        className="feature-item"
                        title="More savings means higher rates"
                        image="./src/img/icon-money.png"
                        description="The more you save with us, the higher your interest rate will be!"
                    />
                    <FeatureItem
                        className="feature-item"
                        title="Security you can trust"
                        image="./src/img/icon-security.png"
                        description="We use top of the line encryption to make sure your data and money is always safe."
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Home;

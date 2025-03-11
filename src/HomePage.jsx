import React from 'react';
import { Link } from 'react-router-dom';
import connect from './connect.jpg';
const HomePage = () => {
    return (
        <>
        <div style={{ textAlign:'center', padding:'50px',}}>
            <header>
            <img class='logo' src={connect} alt="logo" width='100px' />
                <nav>
                     <Link to="/">Home</Link> | <Link to="/events">Events</Link> | <Link to="/">About</Link>
                </nav>
                <h1>Communion App</h1>
            </header>
            <section>
                <h2>Connecting People Across Faiths & Interests</h2>
                <p>Connecting people of all faiths through events and community support.</p>
                <Link to="/events">
                    <button>Explore Events</button>
                </Link>
            </section>
        </div>
        </>
    );
};

export default HomePage;
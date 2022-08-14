import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>Rainforest Bookstore</h2>
            <h3>Customer Obsessed. <br />Learn from the best!</h3>
            <Link className="btn" to="/books">View All Books</Link>
        </section>
    )
}

export default Hero

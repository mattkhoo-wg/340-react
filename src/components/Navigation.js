import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../css/landingPage.css';

export function NavBar() {
    return (
        <nav>
            <li><Link to="/"><span className="material-icons" aria-label="Home">home</span></Link></li>
            <li><Link to="/#about">About Us</Link></li>
            <li><Link to="/data">Data</Link></li>
        </nav>
    )
}
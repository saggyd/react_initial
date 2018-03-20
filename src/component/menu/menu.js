import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const menu = () => {
    return (
        <ul class="nav">
            <li class="nav-item">
            <Link to="/" exact className="nav-link active">Home</Link>
            </li>
            <li class="nav-item">
            <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li class="nav-item">
            <Link to="/contact" className="nav-link">Contact US</Link>
            </li>
        </ul>
    );

}

export default menu;
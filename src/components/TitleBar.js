import React from 'react';
import {SocialIcon} from 'react-social-icons';

const TitleBar = props => (
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">Title</a>
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <SocialIcon url="https://twitter.com/edgarberlinck" />
            </li>
            <li className="nav-item">
                <SocialIcon url="https://linkedin.com/in/edgarberlinck" />
            </li>
        </ul>
    </nav>
)

export default TitleBar;
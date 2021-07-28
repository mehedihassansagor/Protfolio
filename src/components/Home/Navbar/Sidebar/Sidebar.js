import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from '@material-ui/core';

const Sidebar = ({ show, click }) => {
    const sideDrawerClass = ['side-drawer']

    if (show) {
        sideDrawerClass.push('show')
    }

    const goToAboutPage = () => {
        window.scrollTo(0, 10)
    }

    const goToSkill = () => {
        window.scrollTo(0, 900)
    }

    const goToPortfolio = () => {
        window.scrollTo(0, 1900)
    }
    const goToBlogPage = () => {
        window.scrollTo(0, 3500)
    }
    const goToContactPage = () => {
        window.scrollTo(0, 5150)
    }

    return (
        <div className={`${sideDrawerClass.join(' ')}`} style={{ zIndex: '10000' }}>
            <div className="cross-btn" onClick={click}>
                <FontAwesomeIcon icon={faTimes} />
            </div>
            <ul className="sidebar-links" onClick={click}>
                <li><Link onClick={goToAboutPage}>About</Link></li>
                <li><Link onClick={goToSkill}>Skills</Link></li>
                <li><Link onClick={goToPortfolio}>Portfolio</Link></li>
                <li><Link onClick={goToBlogPage}>Blog</Link></li>
                <li><Link onClick={goToContactPage}>Contact</Link></li>
            </ul>
            <div className="menu-icons">
                <a href='https://www.facebook.com/profile.php?id=100018966190023' target="_blank" rel="noreferrer" className="menu-icon"><FontAwesomeIcon className="s-icon" icon={faFacebookF} /></a>
                <a href="https://www.linkedin.com/in/md-rakib-3666891b2/" className="menu-icon" target="_blank" rel="noreferrer"><FontAwesomeIcon className="s-icon" icon={faLinkedinIn} /></a>
                <a href="https://github.com/Rakib544" target="_blank" rel="noreferrer" className="menu-icon" to="/"> <FontAwesomeIcon className="s-icon" icon={faGithub} /></a>
            </div>
        </div>
    );
};

export default Sidebar;
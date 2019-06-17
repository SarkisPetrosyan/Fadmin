import React from 'react';
import './styles.css';
import logo from '../../assets/images/logo.png'
import userIcon from '../../assets/images/icons/user-icon.png'

function Header({ props }) {
    return (
        <header className="header-container">
            <div className="header-logo">
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div className="header-info">
                <div className="date">
                    <p>Сегодня, 13 февраля 2019, 11:05</p>
                </div>
                <div className="header-btn">
                    <button>Мой счет</button>
                </div>
                <div className="user">
                    <div className="user-icon">
                        <img src={userIcon} alt="user"/>
                    </div>
                    <p>Маргаритка</p>
                </div>
                <div className="sidebar-switcher">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </header>
    );
}

export default Header;

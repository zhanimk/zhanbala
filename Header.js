import React from 'react';
import './Header.css'; 
const Header = () => {
    return (
        <header className="admin-panel">
            <div className="logo-container">
                <img src="https://i.postimg.cc/4yR2GrDy/Whats-App-Image-2025-01-16-at-11-13-01.jpg" alt="Логотип" className="logo" />
                <h1>Zhanbala</h1>
            </div>
            <div className="vitamin-info">
                <span>💊 Здоровье начинается с витаминов! 🌱</span><br />
                <span>Откройте для себя лучший выбор витаминов для поддержания энергии и иммунитета. Сделайте каждый день лучше с Zhanbala! ✨</span>
            </div>
            <nav className="nav-links">
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Товары</a></li>
                    <li><a href="#">Заказы</a></li>
                    <li><a href="#">Клиенты</a></li>
                    <li><a href="#">Настройки</a></li>
                </ul>
            </nav>
            <div>
                <button className="register-btn">Регистрация/Вход</button>
            </div>
        </header>
    );
};
export default Header;

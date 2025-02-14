import React from 'react';
import './ProductCard.css';
const ProductCard = ({ product, onShowModal }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">Цена: {product.price} KZT</p>
            <div className="stars">
                <span>{product.stars}</span>
            </div>
            <button className="more-info-btn" onClick={() => onShowModal(product)}>Подробнее</button>
        </div>
    );
};
export default ProductCard;

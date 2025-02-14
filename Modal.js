import React from 'react';
import './Modal.css';
const Modal = ({ product, onClose }) => {
    if (!product) return null; 
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h2>{product.name}</h2>
                <p>{product.details}</p>
            </div>
        </div>
    );
};
export default Modal;

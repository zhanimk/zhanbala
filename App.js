import React, { useState } from 'react';
import Header from './Header';
import ProductCard from './ProductCard';
import Modal from './Modal';
import Footer from './Footer';
import './App.css';
const products = [
    {
        id: 1,
        name: 'Витамин Б',
        description: '500 мг, 30 капсул',
        price: '11 200',
        stars: '★★★★★',
        image: 'https://basket-12.wbbasket.ru/vol1699/part169916/169916426/images/c516x688/1.webp',
    },
    {
        id: 2,
        name: 'Витамин C',
        description: '1000 мг, 30 капсул',
        price: '11 500',
        stars: '★★★★☆',
        image: 'https://enzym.ru/wa-data/public/shop/products/09/38/53809/images/59831/59831.970.png',
    },
    {
        id: 3,
        name: 'Витамин D3',
        description: '20 мл',
        price: '10 000',
        stars: '★★★★★',
        image: 'https://whey.kz/wp-content/uploads/2024/02/Orzax-Vitamin-D3-K2.jpg',
    },
];
function App() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleShowModal = (product) => {
        setSelectedProduct(product);
    };
    const handleCloseModal = () => {
        setSelectedProduct(null);
    };
    return (
        <div className="App">
            <Header />
            <div className="search-container">
                <input type="text" placeholder="Поиск товаров..." />
            </div>
            <section className="product-container">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onShowModal={handleShowModal} />
                ))}
            </section>
            <Modal product={selectedProduct} onClose={handleCloseModal} />
            <Footer />
        </div>
    );
}
export default App;

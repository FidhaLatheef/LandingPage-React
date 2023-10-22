import React from 'react';
import '../Styles/products.css';
import Banner1 from '../assets/banner 1.png';
import Banner2 from '../assets/banner 2.png';
import Banner3 from '../assets/banner 3.png';
import Im1 from '../assets/im1.png';
import Im2 from '../assets/im2.png';
import Im3 from '../assets/im3.png';
import Im4 from '../assets/im4.png';
import Im5 from '../assets/im5.png';
import Im6 from '../assets/im6.png';
import Footer from '../Components/Footer';



function products() {
    const productsData = [
        {
            id: 1,
            image: Banner1,
            description: 'Product 1 description',
            price: '$10',
        },
        {
            id: 2,
            image: Banner2,
            description: 'Product 1 description',
            price: '$15',
        },
        {
            id: 3,
            image: Banner3,
            description: 'Product 1 description',
            price: '$10',
        },
        {
            id: 4,
            image: Im1,
            description: 'Product 1 description',
            price: '$10',
        },
        {
            id: 5,
            image: Im2,
            description: 'Product 1 description',
            price: '$10',
        },
        {
            id: 6,
            image: Im3,
            description: 'Product 1 description',
            price: '$10',
        },
        {
            id: 7,
            image: Im4,
            description: 'Product 1 description',
            price: '$10',
        },
        {
            id: 8,
            image: Im5,
            description: 'Product 1 description',
            price: '$10',
        },
        {
            id: 9,
            image: Im6,
            description: 'Product 1 description',
            price: '$10',
        }


    ];

    return (
        <div className='products'>
            <div className='product-top'>
                <h4>Products</h4>
            </div>
            <div className='product-bottom'>
                <div className='product-grid'>
                    {productsData.map((product) => (
                        <div key={product.id} className='product-card'>
                            <img src={product.image} alt={product.description} />
                            <h5>{product.description}</h5>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />

        </div>
    );
}

export default products;

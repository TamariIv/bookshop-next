'use client'

import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../components/product/Product';
import styles from './books.module.css';
import { getProductsBooks } from '../../services/service';

const Books = () => {

    const [products, setProducts] = useState([]);

    // Fetch items from the API
    useEffect(() => {
        async function fetchItems() {
            const res = await fetch('/api/books');
            const data = await res.json();
            console.log(data);
            setProducts(data);
            console.log("fetch", products);
        }
        fetchItems();
    }, []);

    console.log(products);
    return (

        <div className={styles.products}>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>


    );
};

export default Books;
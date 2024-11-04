import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.sidebar}>
                <nav>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="/jewelry">Jewelry</Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="/books">Books</Link>
                        </li>
                    </ul>
                </nav>

        </div>
    );
};


export default Navbar;
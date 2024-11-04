import React from 'react';

import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.sidebar}>
                <nav>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            {/* <Link to="/">Home</Link> */}
                            Home
                        </li>
                        <li className={styles.item}>
                            {/* <Link to="/jewelry">Jewelry</Link> */}
                            Jewelry
                        </li>
                        <li className={styles.item}>
                            {/* <Link to="/books">Books</Link> */}
                            Books
                        </li>
                    </ul>
                </nav>

        </div>
    );
};


export default Navbar;
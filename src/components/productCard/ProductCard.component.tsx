import type { FC } from 'react';

import cart from '@/assets/cart.svg';

import styles from './productCard.module.css';

interface ProductCardPropsType {
    id: number;
    title: string;
    images: string[];
    price: number;
}

const ProductCard: FC<ProductCardPropsType> = ({ id, title, images, price }) => (
    <section className={styles.card} id={`${id}`}>
        <img className={styles.img} src={images[0]} alt="product" />
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.footer}>
            <p className={styles.price}>
                {price}
                <span className={styles.currency}>₴</span>
            </p>
            <img src={cart} className={styles.cart} alt="cart" />
        </div>
    </section>
);

export default ProductCard;

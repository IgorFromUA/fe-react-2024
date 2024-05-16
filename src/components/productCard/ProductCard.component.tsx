import { type FC } from 'react';

import cart from '@/assets/cart.svg';
import type { ProductCardProps } from '@/interfaces';

import styles from './productCard.module.css';

const ProductCard: FC<ProductCardProps> = ({ onClickCart, isProductInCart, id, title, images, price }) => (
    <section className={styles.card} id={`${id}`}>
        <img className={styles.img} src={images[0]} alt="product" />
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.footer}>
            <p className={styles.price}>
                {price}
                <span className={styles.currency}>₴</span>
            </p>
            <img
                onClick={() => onClickCart(id)}
                src={cart}
                className={`${styles.cart} ${isProductInCart ? styles.cartActive : ''}`}
                alt="cart"
            />
        </div>
    </section>
);

export default ProductCard;

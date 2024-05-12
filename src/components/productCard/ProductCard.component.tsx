import { type FC } from 'react';

import cart from '@/assets/cart.svg';

import styles from './productCard.module.css';

interface ProductCardPropsType {
    onClickCart: Function;
    isProductInCart: boolean;
    id: number;
    title: string;
    images: string[];
    price: number;
}

const ProductCard: FC<ProductCardPropsType> = ({ onClickCart, isProductInCart, id, title, images, price }) => {
    function handleClickCart() {
        onClickCart(id);
    }
    return (
        <section className={styles.card} id={`${id}`}>
            <img className={styles.img} src={images[0]} alt="product" />
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.footer}>
                <p className={styles.price}>
                    {price}
                    <span className={styles.currency}>₴</span>
                </p>
                <img
                    onClick={handleClickCart}
                    src={cart}
                    className={`${styles.cart} ${isProductInCart ? styles.cartActive : ''}`}
                    alt="cart"
                />
            </div>
        </section>
    );
};

export default ProductCard;

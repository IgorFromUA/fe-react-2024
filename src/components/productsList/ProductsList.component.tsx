import type { FC } from 'react';

import type { ProducstListProps } from '@/interfaces';

import ProductCard from '../productCard/ProductCard.component';

import styles from './productsList.module.css';

export const ProducstList: FC<ProducstListProps> = ({ onClickCart, generalCart, products }) => (
    <ul className={`${styles.cards} ${styles.wrapper}`}>
        {products.map(({ id, title, price, images }) => (
            <ProductCard
                onClickCart={onClickCart}
                isProductInCart={generalCart.includes(id)}
                key={id}
                id={id}
                title={title}
                price={price}
                images={images}
            />
        ))}
    </ul>
);

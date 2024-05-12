import type { FC } from 'react';

import { products } from '@/moc/moc';

import ProductCard from '../productCard/ProductCard.component';

import styles from './productsList.module.css';

interface Props {
    onClickCart: Function;
    generalCart: number[];
}

export const ProducstList: FC<Props> = ({ onClickCart, generalCart }) => (
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

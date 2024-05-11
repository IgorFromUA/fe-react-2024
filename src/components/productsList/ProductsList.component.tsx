import { products } from '@/moc/moc';

import ProductCard from '../productCard/ProductCard.component';

import styles from './productsList.module.css';

const ProducstList = () => (
    <ul className={`${styles.cards} ${styles.wrapper}`}>
        {products.map(({ id, title, price, description, images, category, creationAt, updatedAt }) => (
            <ProductCard key={id} id={id} title={title} price={price} images={images} />
        ))}
    </ul>
);

export default ProducstList;

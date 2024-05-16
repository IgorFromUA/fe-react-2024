import type { Product } from './product';

export interface ProducstListProps {
    products: Product[];
    onClickCart: Function;
    generalCart: number[];
}

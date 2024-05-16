export interface ProductCardProps {
    onClickCart: Function;
    isProductInCart: boolean;
    id: number;
    title: string;
    images: string[];
    price: number;
}

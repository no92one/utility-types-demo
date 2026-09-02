import type {
    ProductCardData
} from "../types/product.ts";

export default function ProductCard({
    id,
    name,
    price,
    stock
}: ProductCardData) {
    return (
        <article>
            <h2>{name}</h2>

            <p>Produkt-ID: {id}</p>
            <p>Pris: {price} kr</p>
            <p>Lager: {stock}</p>
        </article>
    );
}

type ProductCardProps = {
    id: number;
    name: string;
    price: number;
    stock: number;
};

export default function ProductCard({
    id,
    name,
    price,
    stock
}: ProductCardProps) {
    return (
        <article>
            <h2>{name}</h2>

            <p>Produkt-ID: {id}</p>
            <p>Pris: {price} kr</p>
            <p>Lager: {stock}</p>
        </article>
    );
}

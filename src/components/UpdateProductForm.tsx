import { useState } from "react";

type UpdateProduct = {
    name?: string;
    description?: string;
    price?: number;
    stock?: number;
};

type UpdateProductFormProps = {
    productId: number;

    onUpdate: (
        id: number,
        changes: UpdateProduct
    ) => void;
};


export default function UpdateProductForm({
    productId,
    onUpdate
}: UpdateProductFormProps) {
    const [price, setPrice] = useState("");

    function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        if (price === "") {
            return;
        }

        onUpdate(productId, {
            price: Number(price)
        });

        setPrice("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Ändra pris</h3>

            <input
                type="number"
                value={price}
                onChange={(event) =>
                    setPrice(event.target.value)
                }
                placeholder="Nytt pris"
            />

            <button type="submit">
                Uppdatera
            </button>
        </form>
    );
}

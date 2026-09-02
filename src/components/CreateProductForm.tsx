import { useState } from "react";

type CreateProduct = {
    name: string;
    description: string;
    price: number;
    stock: number;
};

type CreateProductFormProps = {
    onCreate: (product: CreateProduct) => void;
};

export default function CreateProductForm({
    onCreate
}: CreateProductFormProps) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);

    function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        const newProduct: CreateProduct = {
            name,
            description,
            price,
            stock
        };

        onCreate(newProduct);

        setName("");
        setDescription("");
        setPrice(0);
        setStock(0);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Skapa produkt</h2>

            <label>
                Namn
                <input
                    type="text"
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
                    }
                />
            </label>

            <label>
                Beskrivning
                <input
                    type="text"
                    value={description}
                    onChange={(event) =>
                        setDescription(event.target.value)
                    }
                />
            </label>

            <label>
                Pris
                <input
                    type="number"
                    value={price}
                    onChange={(event) =>
                        setPrice(Number(event.target.value))
                    }
                />
            </label>

            <label>
                Lager
                <input
                    type="number"
                    value={stock}
                    onChange={(event) =>
                        setStock(Number(event.target.value))
                    }
                />
            </label>

            <button type="submit">
                Skapa produkt
            </button>
        </form>
    );
}

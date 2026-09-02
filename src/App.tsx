import { useState } from "react";

import ProductCard from "./components/ProductCard";
import CreateProductForm from "./components/CreateProductForm";
import UpdateProductForm from "./components/UpdateProductForm";

import type { Product } from "./types/product";

type CreateProduct = {
  name: string;
  description: string;
  price: number;
  stock: number;
};

type UpdateProduct = {
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
};

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Hammare",
    description: "En vanlig hammare",
    price: 199,
    stock: 12
  },
  {
    id: 2,
    name: "Såg",
    description: "En såg för trä",
    price: 299,
    stock: 5
  }
];

export default function App() {
  const [products, setProducts] =
    useState<Product[]>(initialProducts);

  function createProduct(
    product: CreateProduct
  ) {
    const newProduct: Product = {
      id: Date.now(),
      ...product
    };

    setProducts((currentProducts) => [
      ...currentProducts,
      newProduct
    ]);
  }

  function updateProduct(
    id: number,
    changes: UpdateProduct
  ) {
    setProducts((currentProducts) =>
      currentProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            ...changes
          };
        }

        return product;
      })
    );
  }

  return (
    <main>
      <h1>Utility Types Demo</h1>

      <CreateProductForm
        onCreate={createProduct}
      />

      <section>
        <h2>Produkter</h2>

        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
              stock={product.stock}
            />

            <UpdateProductForm
              productId={product.id}
              onUpdate={updateProduct}
            />
          </div>
        ))}
      </section>
    </main>
  );
}

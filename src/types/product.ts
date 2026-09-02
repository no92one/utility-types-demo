/*
    Grundtypen för en produkt. 
    Den här typen är vår "source of truth". 
    Alla andra produkttyper nedan skapas utifrån denna typ.
*/
export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
};


/* 
    Pick används när vi bara vill välja ut vissa properties
    från en befintlig typ.

    Här skapar vi en typ för ProductCard-komponenten.
    Komponenten behöver inte hela Product, utan bara:
    id, name, price och stock.
*/
export type ProductCardData = Pick<Product, "id" | "name" | "price" | "stock">;

/* 
    Omit används när vi vill behålla nästan hela typen,
    men ta bort en eller flera properties.

    När vi skapar en ny produkt har den ännu inget id.
    Id skapas vanligtvis senare, till exempel av databasen.

    Därför skapar vi CreateProduct genom att ta Product
    och ta bort "id".
*/
export type CreateProduct = Omit<Product, "id">;

/* 
    Partial gör alla properties i en typ valfria.

    Vid en uppdatering behöver vi inte skicka hela produkten.
    Vi kanske bara vill ändra price eller stock.

    Först använder vi Omit för att ta bort "id",
    eftersom produktens id inte ska kunna ändras.

    Sedan använder vi Partial för att göra resterande 
    properties valfria.

    Läs typen inifrån och ut: 
    1. Omit<Product, "id"> 
    2. Partial<...>
*/
export type UpdateProduct = Partial<Omit<Product, "id">>;
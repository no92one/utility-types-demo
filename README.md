# React + TypeScript – Utility Types Demo

Det här projektet används som ett enkelt exempel för att visa hur TypeScript Utility Types kan användas i ett React-projekt.

Fokus ligger på:

* `Pick`
* `Omit`
* `Partial`
* `Required`
* Idén **"en källtyp, många härledda typer"**

Projektet innehåller en enkel produktlista där användaren kan:

* Visa produkter
* Skapa nya produkter
* Uppdatera priset på befintliga produkter

---

## Branches

Projektet är uppdelat i två versioner.

### `main`

Versionen utan Utility Types.

Här skapas flera liknande typer manuellt, till exempel:

```ts
type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
};

type CreateProduct = {
    name: string;
    description: string;
    price: number;
    stock: number;
};
```

Syftet är att visa problemet med duplicerade typer.

---

### `utility-types`

Samma projekt, men typerna har refaktorerats med TypeScript Utility Types.

Exempel:

```ts
export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
};

export type ProductCardData = Pick<
    Product,
    "id" | "name" | "price" | "stock"
>;

export type CreateProduct = Omit<
    Product,
    "id"
>;

export type UpdateProduct = Partial<
    Omit<Product, "id">
>;
```

Här fungerar `Product` som vår **source of truth**.

De andra typerna skapas sedan utifrån `Product`.

---

## Utility Types

### `Pick`

Väljer ut vissa properties från en typ.

```ts
type ProductCardData = Pick<
    Product,
    "name" | "price"
>;
```

---

### `Omit`

Tar bort vissa properties från en typ.

```ts
type CreateProduct = Omit<
    Product,
    "id"
>;
```

---

### `Partial`

Gör alla properties valfria.

```ts
type UpdateProduct = Partial<Product>;
```

Kan även kombineras med andra Utility Types:

```ts
type UpdateProduct = Partial<
    Omit<Product, "id">
>;
```

Läs typen inifrån och ut:

1. Ta bort `id` från `Product`
2. Gör resterande properties valfria

---

### `Required`

Gör alla properties obligatoriska.

```ts
type ProductDraft = {
    name?: string;
    price?: number;
};

type CompleteProduct =
    Required<ProductDraft>;
```

---

## Installation

Klona repot:

```bash
git clone <repo-url>
```

Gå in i projektet:

```bash
cd utility-types-demo
```

Installera dependencies:

```bash
npm install
```

Starta utvecklingsservern:

```bash
npm run dev
```

---

## Byta mellan versionerna

Visa versionen utan Utility Types:

```bash
git switch main
```

Visa versionen med Utility Types:

```bash
git switch utility-types
```

För att jämföra brancherna:

```bash
git diff main..utility-types
```

---

## Viktigaste idén

Utility Types handlar inte bara om att skriva mindre kod.

Istället för att skapa flera separata typer som nästan beskriver samma data kan vi skapa en grundtyp:

```ts
type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
};
```

och sedan skapa nya typer utifrån den:

```ts
Pick<Product, ...>

Omit<Product, ...>

Partial<Product>

Partial<Omit<Product, ...>>
```

På så sätt får vi:

> **En källtyp, många härledda typer.**

Om `Product` förändras kan TypeScript hjälpa oss att hitta de delar av applikationen som också behöver uppdateras.

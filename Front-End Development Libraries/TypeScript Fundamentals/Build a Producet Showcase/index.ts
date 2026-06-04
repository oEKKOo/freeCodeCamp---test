interface Item {
  type: "book" | "electronics" | "clothing";
  id: string;
  price: number;
}

interface Book extends Item {
  type: "book";
  title: string;
  author: string;
}

interface Electronics extends Item {
  type: "electronics";
  item: string;
  model: string;
  warranty?: number;
}

interface Clothing extends Item {
  type: "clothing";
  item: string;
  brand: string;
  size?: "S" | "M" | "L";
}

type Product = Book | Electronics | Clothing;

class Collection<T> {
  items: T[];

  constructor(items: T[]) {
    this.items = items;
  }

  getAll(): T[] {
    return this.items;
  }

  filter(callback: (item: T) => boolean): T[] {
    return this.items.filter(callback);
  }
}

function renderProduct(product: Product): string {
  let productInfo = "";

  switch (product.type) {
    case "book":
      productInfo = `Book: ${product.title} by ${product.author}`;
      break;

    case "electronics":
      productInfo = `Electronics: ${product.item} - ${product.model}`;

      if (product.warranty !== undefined) {
        productInfo += ` - Warranty: ${product.warranty} year(s)`;
      }
      break;

    case "clothing":
      productInfo = `Clothing: ${product.item} by ${product.brand}`;

      if (product.size !== undefined) {
        productInfo += ` - Size ${product.size}`;
      }
      break;

    default:
      throw new Error(`Unknown product type: ${JSON.stringify(product)}`);
  }

  return `
    <div class="item" id="${product.id}">
      <div>${productInfo}</div>
      <div class="price">${product.price}</div>
    </div>
  `;
}

const products = new Collection<Product>([
  {
    type: "book",
    id: "book-1",
    price: 39,
    title: "TypeScript Basics",
    author: "John Smith",
  },
  {
    type: "book",
    id: "book-2",
    price: 45,
    title: "Clean Code Notes",
    author: "Robert Martin",
  },
  {
    type: "electronics",
    id: "electronics-1",
    price: 899,
    item: "Laptop",
    model: "ThinkBook 14",
    warranty: 2,
  },
  {
    type: "electronics",
    id: "electronics-2",
    price: 199,
    item: "Headphones",
    model: "Sound Pro",
  },
  {
    type: "clothing",
    id: "clothing-1",
    price: 59,
    item: "Jacket",
    brand: "UrbanWear",
    size: "M",
  },
  {
    type: "clothing",
    id: "clothing-2",
    price: 29,
    item: "T-Shirt",
    brand: "DailyFit",
  },
]);

function showProducts(filter?: Product["type"]): void {
  const output = document.querySelector<HTMLDivElement>("#output");

  if (!output) {
    return;
  }

  const productList = filter
    ? products.filter((product) => product.type === filter)
    : products.getAll();

  output.innerHTML = productList
    .map((product) => renderProduct(product))
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const allButton = document.querySelector<HTMLButtonElement>("#all");
  const booksButton = document.querySelector<HTMLButtonElement>("#books");
  const electronicsButton =
    document.querySelector<HTMLButtonElement>("#electronics");
  const clothingButton = document.querySelector<HTMLButtonElement>("#clothing");

  allButton?.addEventListener("click", () => {
    showProducts();
  });

  booksButton?.addEventListener("click", () => {
    showProducts("book");
  });

  electronicsButton?.addEventListener("click", () => {
    showProducts("electronics");
  });

  clothingButton?.addEventListener("click", () => {
    showProducts("clothing");
  });

  showProducts();
});
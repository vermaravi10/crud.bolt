import { Product } from '../types/Product';

export const SEED_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Starter Plan",
    sku: "SP-001",
    price: 19,
    stock: 120,
    category: "Plans"
  },
  {
    id: 2,
    name: "Pro Plan",
    sku: "PP-201",
    price: 49,
    stock: 60,
    category: "Plans"
  },
  {
    id: 3,
    name: "AI Credits 1K",
    sku: "CR-1K",
    price: 9,
    stock: 999,
    category: "Credits"
  },
  {
    id: 4,
    name: "AI Credits 10K",
    sku: "CR-10K",
    price: 79,
    stock: 200,
    category: "Credits"
  },
  {
    id: 5,
    name: "Support Add-on",
    sku: "SA-01",
    price: 29,
    stock: 40,
    category: "Add-ons"
  }
];
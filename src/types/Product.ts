export interface Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  stock: number;
  category: string;
}

export interface ProductFormData {
  name: string;
  sku: string;
  price: number;
  stock: number;
  category: string;
}

export interface ValidationErrors {
  name?: string;
  sku?: string;
  price?: string;
  stock?: string;
  category?: string;
}

export type SortField = 'name' | 'price';
export type SortDirection = 'asc' | 'desc';
import { useState, useEffect, useCallback } from 'react';
import { Product, ProductFormData, SortField, SortDirection } from '../types/Product';
import { SEED_PRODUCTS } from '../data/seedData';

const STORAGE_KEY = 'pagepilot-products';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  // Load products from localStorage or use seed data
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setProducts(JSON.parse(stored));
      } else {
        setProducts(SEED_PRODUCTS);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_PRODUCTS));
      }
    } catch (error) {
      console.error('Error loading products:', error);
      setProducts(SEED_PRODUCTS);
    } finally {
      setLoading(false);
    }
  }, []);

  // Save products to localStorage
  const saveProducts = useCallback((updatedProducts: Product[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProducts));
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error saving products:', error);
    }
  }, []);

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    return 0;
  });

  // Paginate products
  const totalPages = Math.ceil(sortedProducts.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + pageSize);

  // CRUD operations
  const createProduct = useCallback((productData: ProductFormData) => {
    const newId = Math.max(...products.map(p => p.id), 0) + 1;
    const newProduct: Product = {
      id: newId,
      ...productData
    };
    const updatedProducts = [...products, newProduct];
    saveProducts(updatedProducts);
    setCurrentPage(1); // Reset to first page
  }, [products, saveProducts]);

  const updateProduct = useCallback((id: number, productData: ProductFormData) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, ...productData } : product
    );
    saveProducts(updatedProducts);
  }, [products, saveProducts]);

  const deleteProduct = useCallback((id: number) => {
    const updatedProducts = products.filter(product => product.id !== id);
    saveProducts(updatedProducts);
    
    // Adjust current page if necessary
    const newTotalPages = Math.ceil((sortedProducts.length - 1) / pageSize);
    if (currentPage > newTotalPages && newTotalPages > 0) {
      setCurrentPage(newTotalPages);
    }
  }, [products, saveProducts, sortedProducts.length, pageSize, currentPage]);

  const handleSort = useCallback((field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
    setCurrentPage(1); // Reset to first page
  }, [sortField, sortDirection]);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page
  }, []);

  return {
    products: paginatedProducts,
    allProducts: products,
    loading,
    searchTerm,
    sortField,
    sortDirection,
    currentPage,
    totalPages,
    pageSize,
    totalItems: sortedProducts.length,
    createProduct,
    updateProduct,
    deleteProduct,
    handleSort,
    handleSearch,
    setCurrentPage
  };
};
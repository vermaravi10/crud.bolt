import { Product, ProductFormData, ValidationErrors } from '../types/Product';

export const validateProduct = (
  data: ProductFormData,
  existingProducts: Product[],
  editingId?: number
): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Name validation
  if (!data.name.trim()) {
    errors.name = 'Name is required';
  }

  // SKU validation
  if (!data.sku.trim()) {
    errors.sku = 'SKU is required';
  } else {
    // Check for duplicate SKU
    const isDuplicate = existingProducts.some(
      product => product.sku.toLowerCase() === data.sku.toLowerCase() && product.id !== editingId
    );
    if (isDuplicate) {
      errors.sku = 'SKU must be unique';
    }
  }

  // Price validation
  if (data.price <= 0) {
    errors.price = 'Price must be greater than 0';
  }

  // Stock validation
  if (data.stock < 0) {
    errors.stock = 'Stock cannot be negative';
  }

  // Category validation
  if (!data.category.trim()) {
    errors.category = 'Category is required';
  }

  return errors;
};

export const hasValidationErrors = (errors: ValidationErrors): boolean => {
  return Object.keys(errors).length > 0;
};
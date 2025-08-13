# PagePilot Admin - Products Management

A modern, responsive admin interface for managing products with full CRUD functionality, built with React, TypeScript, and Tailwind CSS.

## Features

- **Complete Product Management**: Create, read, update, and delete products
- **Advanced Search**: Search products by name or SKU with real-time filtering
- **Smart Sorting**: Sort products by name or price (ascending/descending)
- **Pagination**: Client-side pagination with configurable page size (10 items per page)
- **Data Validation**: Comprehensive form validation with real-time error feedback
- **Session Persistence**: Data persisted in localStorage for session continuity
- **Responsive Design**: Fully responsive interface that works on all devices
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## Product Fields

- **ID**: Auto-generated unique identifier
- **Name**: Product name (required)
- **SKU**: Stock Keeping Unit (required, unique)
- **Price**: Product price in USD (required, > 0)
- **Stock**: Available quantity (required, ≥ 0)
- **Category**: Product category (Plans, Credits, Add-ons, Services, Hardware)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Usage

### Creating Products
1. Click the "Add Product" button
2. Fill in all required fields
3. Click "Create Product" to save

### Editing Products
1. Click the edit icon (pencil) in the Actions column
2. Modify the desired fields
3. Click "Update Product" to save changes

### Deleting Products
1. Click the delete icon (trash) in the Actions column
2. Confirm the deletion in the popup dialog

### Searching Products
- Use the search bar to filter products by name or SKU
- Search is case-insensitive and updates in real-time

### Sorting Products
- Click column headers for "Name" or "Price" to sort
- Click again to reverse the sort order

### Pagination
- Use the pagination controls at the bottom of the table
- Shows 10 products per page by default
- Displays current page info and total results

## Data Storage

The application uses localStorage for session persistence. The initial dataset includes:

- Starter Plan (SP-001) - $19, 120 in stock
- Pro Plan (PP-201) - $49, 60 in stock  
- AI Credits 1K (CR-1K) - $9, 999 in stock
- AI Credits 10K (CR-10K) - $79, 200 in stock
- Support Add-on (SA-01) - $29, 40 in stock

## Validation Rules

- **Name**: Required, cannot be empty
- **SKU**: Required, must be unique across all products
- **Price**: Required, must be greater than 0
- **Stock**: Required, must be 0 or greater
- **Category**: Required, must select from predefined options

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling and responsive design
- **Lucide React** - Icons
- **Vite** - Build tool and development server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is part of the PagePilot admin system.
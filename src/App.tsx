import React from 'react';
import { ProductsTable } from './components/ProductsTable';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg font-bold text-lg">
                PP
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">PagePilot</h1>
                <p className="text-gray-600">Admin Dashboard</p>
              </div>
            </div>
          </div>
          
          <ProductsTable />
        </div>
      </div>
    </div>
  );
}

export default App;
import React from 'react';

const ProductList = () => {
  const products = [
    { id: 1, name: "T-Shirt", price: "₹499" },
    { id: 2, name: "Shoes", price: "₹999" },
    { id: 3, name: "Watch", price: "₹1,499" },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Available Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

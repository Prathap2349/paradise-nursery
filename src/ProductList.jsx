import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItem, updateQuantity } from './CartSlice';
import plants from './data/plants';

function ProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');

  const isInCart = (name) => cartItems.some((item) => item.name === name);
  const getQty = (name) => cartItems.find((item) => item.name === name)?.quantity || 0;

  const filtered = plants.map((cat) => ({
    ...cat,
    plants: cat.plants
      .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) =>
        sort === 'asc' ? a.price - b.price :
        sort === 'desc' ? b.price - a.price : 0
      ),
  })).filter((cat) => cat.plants.length > 0);

  return (
    <div className="product-list-page">
      <div className="filters">
        <input
          className="search-input"
          placeholder="🔍 Search plants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="sort-select" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Sort: Default</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
      <div className="product-categories">
        {filtered.map((cat) => (
          <div key={cat.category} className="category">
            <h3>{cat.category}</h3>
            <div className="products-grid">
              {cat.plants.map((plant) => (
                <div key={plant.name} className="product-card">
                  <img src={plant.image} alt={plant.name} />
                  <div className="product-info">
                    <h4>{plant.name}</h4>
                    <p>{plant.description}</p>
                    <span className="price">${plant.price.toFixed(2)}</span>
                    {isInCart(plant.name) ? (
                      <div className="qty-controls">
                        <button onClick={() => dispatch(updateQuantity({ name: plant.name, quantity: getQty(plant.name) - 1 }))}>−</button>
                        <span>{getQty(plant.name)}</span>
                        <button onClick={() => dispatch(updateQuantity({ name: plant.name, quantity: getQty(plant.name) + 1 }))}>+</button>
                      </div>
                    ) : (
                      <button className="add-to-cart-btn" onClick={() => dispatch(addItem(plant))}>
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="continue-btn" style={{margin: '20px'}} onClick={() => navigate('/cart')}>View Cart 🛒</button>
    </div>
  );
}

export default ProductList;

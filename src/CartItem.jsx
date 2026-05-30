import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>🛒 Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty</h3>
          <p>Add some beautiful plants!</p>
          <button className="continue-btn" onClick={() => navigate('/products')}>Continue Shopping</button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.name} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)} each</p>
                <div className="quantity-controls">
                  <button onClick={() => item.quantity === 1 ? dispatch(removeItem(item.name)) : dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))}>+</button>
                </div>
                <p><strong>Subtotal: ${(item.price * item.quantity).toFixed(2)}</strong></p>
              </div>
              <button className="remove-btn" onClick={() => dispatch(removeItem(item.name))}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <span>Total: ${totalCost.toFixed(2)}</span>
            <button className="checkout-btn" onClick={() => alert('Coming Soon!')}>Checkout</button>
          </div>
          <button className="continue-btn" onClick={() => navigate('/products')}>← Continue Shopping</button>
        </>
      )}
    </div>
  );
}

export default CartItem;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQty, decrementQty, removeFromCart } from './redux/Action';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const USD_TO_INR = 83;

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity * USD_TO_INR, 0);
  };

  const calculateDiscount = () => {
    return cartItems.reduce((acc, item) => {
      const discount = (item.price * item.quantity * item.discountPercentage) / 100;
      return acc + discount;
    }, 0);
  };


  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  if (cartItems.length === 0) {
    return <div className="text-center mt-5"><h4>No items in cart</h4>
    
    </div>;

  }

  return (
    <div className="container my-5">
      <div className="row">
        {/* Left Section: Cart Items */}
        <div className="col-md-9">
          {cartItems.map(item => (
            <div key={item.id} className="border  rounded p-3 mb-3 bg-light d-flex">

              {/* 1. Image + Quantity */}
              <div className="text-center me-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{ height: '100px', width: '100px', objectFit: 'contain' }}
                />
                <div className="mt-2 d-flex justify-content-center align-items-center gap-2">
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => dispatch(decrementQty(item.id))}>−</button>
                  <span>{item.quantity}</span>
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => dispatch(incrementQty(item.id))}>+</button>
                </div>
              </div>

              {/* 2. Product Info */}
              <div className="flex-grow-1">
                <h5>{item.title}</h5>
                <p>Brand : {item.brand}</p>
                <p>{item.description}</p>
                <button className="btn btn-sm btn-danger mt-2" onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </div>

              {/* 3. Delivery Info */}
              <div className="text-end">
                <p className="text-success">Delivered by Mon, Jul 29</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Price Details */}
        <div className="col-md-3">
          <div className="border rounded p-3 bg-white shadow-sm">
            <h5>Price Details</h5>
            <hr />
            <p>
              Price ({totalItems} items): ₹{calculateTotal().toLocaleString('en-IN')}
            </p>
            <p className="text-success">
              Discount: − ₹{calculateDiscount().toLocaleString('en-IN')}
            </p>
            <p>Protect Promise Fee: ₹55</p>
            <hr />
            <h6>
              Total Amount: ₹{(calculateTotal() - calculateDiscount() + 55).toLocaleString('en-IN')}
            </h6>
            <p className="text-success"> 
              You will save ₹{calculateDiscount().toLocaleString('en-IN')} on this order
            </p>
          </div>
        </div>
      </div>
      <button className='btn btn-warning '>Place Order</button>
    </div>
  );
};

export default CartPage;

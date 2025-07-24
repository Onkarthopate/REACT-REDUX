import React from 'react';
import addToCart from './Images/addToCart.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

        const cartCount = useSelector(state => state.cart.items.length);

    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg bg-light border-bottom shadow-sm px-4 py-3">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                {/* Brand */}
                <a className="navbar-brand fw-bold fs-4" href="#">
                    MyStore
                </a>

                {/* Right Side */}
                <div className="d-flex gap-3">
                    <button className="btn btn-outline-primary">
                        Login
                    </button>

                    <button className="btn btn-primary d-flex align-items-center gap-2 position-relative" 
                        onClick={()=>navigate('/addToCart')}>
                            
                        <div className="position-relative">
                            <img src={addToCart} alt="cart" height="23" />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill ">
                                {cartCount}
                            </span>
                        </div>
                        <span>Cart</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

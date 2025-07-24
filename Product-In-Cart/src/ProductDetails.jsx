import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import addToCartImg from './Images/addToCart.png'
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/Action';

const ProductDetails = () => {

    const { id } = useParams();
    const [products, setProducts] = useState(null)
    const dispatch = useDispatch();


    const fetchProductDetail = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`);
            setProducts(response.data);
            console.log(response.data);
        } catch (err) {
            console.error('Error fetching product:', err.message);
        }
    };

    useEffect(() => {
        fetchProductDetail();
    }, [id]);

    if (!products) return <p>Loading Product..</p>

    return (
        <div className="container my-4 p-4">
            <div className="row">
                <div className="col-md-4 text-center">
                    <img src={products.thumbnail} alt={products.title} className="img-fluid" />
                    <div className="mt-3 d-flex justify-content-center gap-2">
                        <button className="btn btn-outline-primary d-flex align-items-center gap-2"
                            onClick={() => dispatch(addToCart(products))}
                        >
                            <img src={addToCartImg} alt="cart" height="20" />
                            Add to Cart
                        </button>
                        <button className="btn btn-success">⚡Buy Now</button>
                    </div>
                </div>

                <div className="col-md-8">
                    <h2>{products.title}</h2>
                    <p>{products.description}</p>
                    <p><strong>Brand:</strong> {products.brand}</p>
                    <p><strong>Category:</strong> {products.category}</p>
                    <p><strong>Price:</strong> ${products.price}</p>
                    <p><strong>Rating:</strong> {products.rating} ⭐</p>
                    <p><strong>Warrenty Validation :</strong> {products.warrantyInformation}</p>
                    <p><strong>Shipping Into :</strong> {products.shippingInformation}</p>
                    <p><strong>Return Policy :</strong> {products.returnPolicy}</p>
                </div>
            </div>
        </div>


    )
}

export default ProductDetails
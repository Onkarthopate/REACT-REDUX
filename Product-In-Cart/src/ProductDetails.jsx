import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {

    const { id } = useParams();
    const [products, setProducts] = useState(null)
    const navigate = useNavigate();

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
            <div style={{ padding: '2rem' ,border:"2px solid black"}}>
                <h2>{products.title}</h2>
                <img src={products.thumbnail} alt={products.title} style={{ maxWidth: '300px' }} />
                <p>{products.description}</p>
                <p><strong>Brand:</strong> {products.brand}</p>
                <p><strong>Category:</strong> {products.category}</p>
                <p><strong>Price:</strong> ${products.price}</p>
                <p><strong>Rating:</strong> {products.rating} ⭐</p>
                <button>Add to Cart</button>
                <button onClick={() => navigate('/')} >View More</button>
            </div>
    )
}

export default ProductDetails
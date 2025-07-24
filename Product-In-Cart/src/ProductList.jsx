import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            setProducts(response.data.products);
        } catch (error) {
            console.log('Error', error.message);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container my-4">
            {products.length === 0 && <p>Loading ...</p>}

            <div className="row g-4">
                {products.map((product) => (
                    <div key={product.id} className="col-md-6 col-lg-4">
                        <div
                            className="card h-100 shadow-sm"
                            onClick={() => navigate(`/product/${product.id}`)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={product.thumbnail}
                                className="card-img-top"
                                alt={product.title}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text text-truncate">{product.description}</p>
                                <p className="mb-1"><strong>Category:</strong> {product.category}</p>
                                <p className="mb-1">
                                    <strong>Rating:</strong> {product.rating} ⭐
                                </p>
                                <p className="mb-2">
                                    💰 <strong>${product.price}</strong>
                                </p>
                                <button
                                    className="btn btn-primary mt-auto"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/product/${product.id}`);
                                    }}
                                >
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;

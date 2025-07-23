import  { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            setProducts(response.data.products);
            // console.log(response.data.products);

        } catch (error) {
            console.log('Error', error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <div>
            <h2>🛍️ Product List</h2>
            {products.length == 0 && <p>Loading ...</p>}
            {
                products.map((product) => {
                    return (
                        <div
                            key={product.id}
                            onClick={()=>navigate(`/product/${product.id}`)}
                            style={{
                                display: 'flex',
                                border: '1px solid #ccc',
                                margin: '1rem',
                                padding: '1rem',
                                alignItems: 'flex-start',
                                gap: '1rem'
                            }}
                        >
                            <div style={{ flex: '0 0 250px' }}>
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    style={{ width: '100%',maxWidth: '150px', objectFit: 'contain' }}
                                />
                            </div>

                            <div style={{ flex: 1 }}>
                                <h4>{product.title}</h4>
                                <p>{product.description}</p>
                                <p><strong>Category:</strong> {product.category}</p>
                                <p><strong>Rating:</strong> {product.rating?.rate} ⭐ ({product.rating?.count} reviews)</p>
                                <p>💰 <strong>${product.price}</strong></p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ProductList
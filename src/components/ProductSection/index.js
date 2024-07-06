import './style.css'

import product from './product.png'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProductSection({id}) {
    const navigate = useNavigate()
    const apiUrl = process.env.REACT_APP_API_URL;
    const productId = id 
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`${apiUrl}api/products/id/${productId}`).then((res) => {
            setProduct(res.data)
        })
    }, [productId, apiUrl])
    return (
        <div className='product-section'>
            <div className='product-section-main'>
                <div className='product-section-tittle'>
                    <h1>{product.name}</h1>
                </div>
                <div className='product-section-price'>
                    POR R${product.price}
                </div>
                <button onClick={() => navigate(`/product/${productId}`)}>
                    saiba mais
                </button>
            </div>
            <div className='product-section-image'>
                <img src={product.urlimage} alt='product image' />
            </div>
        </div>
    );
}

export default ProductSection;
import './style.css'

import product from './product.png'
import { useNavigate } from 'react-router-dom';

function ProductSection() {
    const navigate = useNavigate()

    return (
        <div className='product-section'>
            <div className='product-section-main'>
                <div className='product-section-tittle'>
                    <h1> ALIMENTADOR ANIMAL</h1>
                </div>
                <div className='product-section-price'>
                    POR R$399,90
                </div>
                <button onClick={()=>navigate('/product/1')}>
                    saiba mais
                </button>
            </div>
            <div className='product-section-image'>
                <img height={"80%"} src={product} alt='product image' />
            </div>
        </div>
    );
}

export default ProductSection;
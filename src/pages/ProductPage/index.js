import { useEffect, useState } from "react";
import Cart from "../../components/Cart";
import Header from "../../components/Header";
import LateralButtons from "../../components/LateralButtons";
import Main from "../../components/Main";
import { useCart } from "../../contexts/cartContext";
import productimage from './product.png'

import './style.css'
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductPage() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const userData = JSON.parse(localStorage.getItem('userData'))

    const { addToCart } = useCart();
    const { productId } = useParams()
    let a
    const [product, setProduct] = useState({})
    const [description, setDescription] = useState([])

    const crateCheckout = () => {
        axios.post(`${apiUrl}api/stripe/create-checkout-session`, { products: [product], id: userData.id }).then((response) => {
            window.location.href = response.data.url
        })
    }


    useEffect(() => {
        axios.get(`${apiUrl}api/products/id/${productId}`).then((res) => {
            setProduct(res.data)
            setDescription(res.data.description.split('.'))
        })
    }, [productId, apiUrl])

    return (
        <>
            <Cart />
            <Header />
            <LateralButtons />
            <Main>
                {product &&
                    <div className="product-page">
                        <div className="product-page-image">
                            <img src={productimage} alt="product image" />
                            <h1>{product.name}</h1>
                            <div className="product-page-image-price">
                                R${product.price}
                            </div>
                            <div className="product-page-image-action">
                                <button onClick={()=>addToCart(product)}>
                                    Adicionar ao carrinho
                                </button>
                                <button onClick={crateCheckout}>
                                    Comprar
                                </button>
                            </div>
                        </div>
                        <div className="product-page-description">
                            {description.map((description) => {
                                return (
                                    <div class="product-page-description-section">
                                        <p>{description}</p>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                }
            </Main>
        </>
    );
}

export default ProductPage;
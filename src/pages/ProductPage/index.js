    import { Helmet } from 'react-helmet-async';
    import { useEffect, useState } from "react";
    import Cart from "../../components/Cart";
    import Header from "../../components/Header";
    import LateralButtons from "../../components/LateralButtons";
    import Main from "../../components/Main";
    import { useCart } from "../../contexts/cartContext";
    import './style.css'
    import axios from "axios";
    import { useNavigate, useParams } from "react-router-dom";
    import { TbTruckDelivery } from "react-icons/tb";

    function ProductPage() {
        const navigate = useNavigate()
        const apiUrl = process.env.REACT_APP_API_URL;
        const userData = JSON.parse(localStorage.getItem('userData'))

        const { addToCart } = useCart();
        const { productName } = useParams()
        const [product, setProduct] = useState({})
        const [description, setDescription] = useState([])

        const [previousPage, setPreviousPage] = useState()

        const createCheckout = () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate(`/login/${previousPage[1]}`)
                return
            }
            axios.post(`${apiUrl}api/stripe/create-checkout-session`, { products: [product], id: userData.id }).then((response) => {
                window.location.href = response.data.url
            })
        }


        useEffect(() => {
            let url = window.location.pathname
            setPreviousPage(url.split('/'))
            axios.get(`${apiUrl}api/products/name/${productName}`).then((res) => {
                setProduct(res.data)
                setDescription(res.data.description.split('.'))
            })
        }, [apiUrl, setPreviousPage, productName])

        return (
            <>
                <Helmet>
                    <title>{`${product.name}`} | PetInovaBR</title>
                    <meta name="description" content={`Compre ${product.name} por ${product.price}. Frete grátis!.`} />
                    <meta name="keywords" content={`produto, ${product.name}, comprar ${product.name}`} />
                </Helmet>
                <Cart />
                <Header />
                <LateralButtons />
                <Main>
                    {product && 
                        <>
                            <div className="product-page">
                                <div className="product-page-tab">
                                    <h1>Frete grátis</h1>
                                </div>
                                <img src={product.urlimage} alt={product.name} />
                                <div>
                                    <h2>{product.name}</h2>
                                    <h4>Por</h4>
                                    <h1>R${product.price}</h1>
                                </div>
                                <div className="product-page-buttons">
                                    <div className="product-page-buttons">
                                        <button onClick={() => {
                                            addToCart(product)
                                        }}>Adicionar ao carrinho</button>
                                        <button onClick={createCheckout}>Comprar agora</button>
                                    </div>
                                </div>
                                <div className="product-page-shiping">
                                    <h3>Receba em sua casa em até 5 dias, por nossa conta!</h3>
                                    <TbTruckDelivery color="white" size={40}
                                    />
                                </div>
                                <div className="product-page-description">
                                    {
                                        typeof (description) === "object" ?
                                            description.map(description => {
                                                return (
                                                    <p>
                                                        {description}
                                                    </p>
                                                )
                                            }) :
                                            <p>
                                                {description}
                                            </p>
                                    }
                                </div>
                                <iframe style={{ borderRadius: "25px", margin: "20px 0px" }} width="100%" height="215" src="https://www.youtube.com/embed/Icdew6aFnFU?si=OlVaPHbgO_h4BKBy&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </>
                    }
                </Main>
            </>
        );
    }

    export default ProductPage;
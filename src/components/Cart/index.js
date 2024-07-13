import axios from 'axios';
import { useCart } from '../../contexts/cartContext';
import OrderItem from '../OrderItem';
import './style.css'

function Cart() {
    const apiUrl = process.env.REACT_APP_API_URL
    const userData = localStorage.getItem('userData')
    const { cartIsOpen, setCartIsOpen } = useCart()
    const { cart } = useCart();

    const createCheckout = () => {
        axios.post(`${apiUrl}api/stripe/create-checkout-session`, { products: cart, id: userData.id }).then((response) => {
            window.location.href = response.data.url
        })
    }

    return (
        <>
            {cartIsOpen &&
                <div className='cart-container bounceInUp'>
                    <div onClick={() => setCartIsOpen(!cartIsOpen)} className='close-cart'></div>
                    <div className='cart'>
                        <h1>Meus Carrinho</h1>
                        {cart.map((product, index) => {
                            return (
                                <OrderItem index={index} product={product} />
                            )
                        })}
                        {cart.length === 0 ?
                            <p>Ainda vazio (;</p>
                            :
                            <div className='cart-action'>
                                <button onClick={createCheckout}>Comprar agora</button>
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    );
}

export default Cart;
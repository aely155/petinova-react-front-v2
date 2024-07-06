import { useCart } from '../../contexts/cartContext';
import OrderItem from '../OrderItem';
import './style.css'

function Cart() {

    const { cartIsOpen, setCartIsOpen } = useCart()
    const { cart } = useCart();

    return (
        <>
            {cartIsOpen &&
                <div className='cart-container bounceInUp'>
                    <div onClick={() => setCartIsOpen(!cartIsOpen)} className='close-cart'></div>
                    <div className='cart'>
                        <h1>Meus Produtos</h1>
                        {cart.map((product, index) => {
                            return (
                                <OrderItem index={index} product={product} />
                            )
                        })}
                    </div>
                </div>
            }
        </>
    );
}

export default Cart;
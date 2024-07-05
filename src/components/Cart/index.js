import { useCart } from '../../contexts/cartContext';
import './style.css'

function Cart() {

    const { cartIsOpen, setCartIsOpen } = useCart()

    return (
        <>
            {cartIsOpen &&
                <div className='cart-container bounceInUp'>
                    <div onClick={()=>setCartIsOpen(!cartIsOpen)} className='close-cart'></div>
                    <div className='cart'>

                    </div>
                </div>
            }
        </>
    );
}

export default Cart;
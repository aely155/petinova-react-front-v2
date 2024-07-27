import './style.css'
import cat from './cat.png'
function FoodCalcBanner() {
    return (
        <div className='foodcalcbanner'>
            <img src={cat} alt='calculadora de ração gato segurnado pote de ração'/>
            <div className='foodcalcbanner-content'></div>
        </div>
    );
}

export default FoodCalcBanner;
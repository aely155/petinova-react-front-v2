import './style.css'
import cat from './cat.png'
import { Link } from 'react-router-dom';
function FoodCalcBanner() {
    return (
        <div className='foodcalcbanner'>
            <img src={cat} alt='calculadora de ração gato segurnado pote de ração' />
            <div className='foodcalcbanner-content'>
                <h1>Descubra a Porção Ideal de Alimento para Seu Cão ou Gato: <br />Garanta a Saúde e Felicidade do Seu Pet</h1>

                <div className='foodcalcbanner-content-box'>
                    <p>Encontrar a quantidade certa de alimento para seu cão ou gato é essencial para manter a saúde e a felicidade do seu pet. A porção ideal depende de vários fatores, como idade, peso e nível de atividade.</p>
                    <Link to={'/pet-food'}>
                        <button>Quero descobrir</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FoodCalcBanner;
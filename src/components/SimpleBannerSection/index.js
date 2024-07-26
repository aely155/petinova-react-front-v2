import './style.css'
import dog from './dog.png'
import { PopUpContext } from '../../contexts/popUpContext';
import { useContext } from 'react';

function SimpleBannerSection() {
    const { setIsOpen } = useContext(PopUpContext)

    const openPopUp = ()=>{
        setIsOpen(true)
    }
    return (
        <div className='simple-banner-section'>
            <div>
                <h1>EM TODA COMPRA VOCE AJUDA UMA INSTITUICAO ANIMAL</h1>
                <button onClick={openPopUp}>saiba como</button>
                <img src={dog} />
            </div>
        </div>
    );
}

export default SimpleBannerSection;
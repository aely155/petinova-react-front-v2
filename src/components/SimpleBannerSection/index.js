import './style.css'
import dog from './dog.png'

function SimpleBannerSection() {
    return (
        <div className='simple-banner-section'>
            <div>
                <h1>EM TODA COMPRA VOCE AJUDA UMA INSTITUICAO ANIMAL</h1>
                <button>saiba como</button>
                <img src={dog}/>
            </div>
        </div>
    );
}

export default SimpleBannerSection;
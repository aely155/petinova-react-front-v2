import { FaTruckFast } from 'react-icons/fa6';
import './style.css'

function HorizontalBannerSection() {
    return (
        <div className='horizontal-banner-section'>
            <div className='horizontal-banner-section-image'></div>
            <div className='horizontal-banner-section-text'>RECEBA SUA COMPRA EM ATE CINCO DIAS <FaTruckFast size={70}/></div>
        </div>
    );
}

export default HorizontalBannerSection;
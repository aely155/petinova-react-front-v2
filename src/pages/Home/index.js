import Header from '../../components/Header'
import ProductSection from '../../components/ProductSection'
import SimpleBannerSection from '../../components/SimpleBannerSection'
import HorizontalBannerSection from '../../components/HorizontalBannerSection'
import LateralButtons from '../../components/LateralButtons';
import Cart from '../../components/Cart';

function Home() {
    return (
        <>
            <Cart />
            <LateralButtons />
            <Header />
            <ProductSection />
            <SimpleBannerSection />
            <ProductSection />
            <HorizontalBannerSection />
        </>
    );
}

export default Home;
import Header from '../../components/Header'
import ProductSection from '../../components/ProductSection'
import SimpleBannerSection from '../../components/SimpleBannerSection'
import HorizontalBannerSection from '../../components/HorizontalBannerSection'
import LateralButtons from '../../components/LateralButtons';
import Cart from '../../components/Cart';
import Main from '../../components/Main';

function Home() {
    return (
        <>
            <Cart />
            <LateralButtons />
            <Header />
            <Main>
                <ProductSection />
                <SimpleBannerSection />
                <ProductSection />
                <HorizontalBannerSection />
            </Main>
        </>
    );
}

export default Home;
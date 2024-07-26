import Header from '../../components/Header'
import ProductSection from '../../components/ProductSection'
import SimpleBannerSection from '../../components/SimpleBannerSection'
import HorizontalBannerSection from '../../components/HorizontalBannerSection'
import LateralButtons from '../../components/LateralButtons';
import Cart from '../../components/Cart';
import Main from '../../components/Main';
import ProductGrid from '../../components/ProductsGrid';

function Home() {
    return (
        <>
            <Cart />
            <LateralButtons />
            <Header />
            <Main>
                <ProductGrid>
                    <ProductSection id={32} tag={"NOVO"} tagTextColor={"white"} tagColor={"red"} />
                    <ProductSection id={14} tag={"POUCAS UNIDADES"} tagTextColor={"white"} tagColor={"black"} />
                </ProductGrid>
                <SimpleBannerSection />
                <HorizontalBannerSection />
            </Main>
        </>
    );
}

export default Home;
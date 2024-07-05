import Cart from '../../components/Cart';
import DesconectButton from '../../components/DesconectButton';
import Header from '../../components/Header';
import LateralButtons from '../../components/LateralButtons';
import Main from '../../components/Main';
import ProfileCard from '../../components/ProfileCard';
import './style.css'

function MyProfile() {
    return (
        <>
            <Cart />
            <LateralButtons />
            <Header />
            <Main>
                <ProfileCard />
                <DesconectButton/>
            </Main>
        </>
    );
}

export default MyProfile;
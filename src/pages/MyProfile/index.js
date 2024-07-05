import Cart from '../../components/Cart';
import OptionButton from '../../components/OptionButton';
import Header from '../../components/Header';
import LateralButtons from '../../components/LateralButtons';
import Main from '../../components/Main';
import ProfileCard from '../../components/ProfileCard';
import './style.css'
import { IoMdExit } from 'react-icons/io';
import { FiPackage } from 'react-icons/fi';

function MyProfile() {
    const desconect = () => {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <>
            <Cart />
            <LateralButtons />
            <Header />
            <Main>
                <ProfileCard />
                <OptionButton bg="gray" color='white'>
                    <FiPackage style={{ marginRight: "10px" }} />
                    Meus Pedidos
                </OptionButton>
                <OptionButton onclick={desconect} bg="red">
                    <IoMdExit style={{ marginRight: "10px" }} />
                    Sair
                </OptionButton>
            </Main>
        </>
    );
}

export default MyProfile;
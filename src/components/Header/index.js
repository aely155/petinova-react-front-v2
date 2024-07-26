import './style.css'
import logo from './logo.png'
import hamburger from './hamburger.png'
import cat from './cat.png'
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu';
import { useContext } from 'react';
import { MenuContext } from '../../contexts/menuContext';

function Header() {
    const navigate = useNavigate()
    const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext);

    return (
        <header className="header-container">
            <div className='header'>
                <img onClick={() => navigate('/')} height={"100%"} src={logo} alt="pet inova logo" />
                <img onClick={()=> setMenuIsOpen(!menuIsOpen)} height={"30%"} src={hamburger} alt="hamburger icon" />
            </div>
            <Menu />
            <div className='header-content'>
                <div>
                    <h1>UM MÊS DE <span style={{textDecoration:"underline"}}>FRETE</span></h1>
                    <h2>GRÁTIS</h2>
                </div>
            </div>
            <div className='header-cat'>
                <img alt='cat' src={cat}/>
            </div>
            <img/>
        </header>
    );
}

export default Header;
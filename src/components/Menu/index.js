import { useContext } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import './style.css'
import { useNavigate } from 'react-router-dom';
function Menu() {
    const storedUser = localStorage.getItem('userData');
    const userData = JSON.parse(storedUser);
    const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext);
    const navigate = useNavigate()
    return (
        <>
            {menuIsOpen &&
                <div className='menu bounceInDown'>
                    {userData ?
                        <div onClick={() => { navigate('/profile'); setMenuIsOpen(false) }} className='menu-item'>
                            {userData.fullname} | MEU PERFIL
                        </div> :
                        <div onClick={() => { navigate('/login'); setMenuIsOpen(false) }} className='menu-item'>
                            ENTRAR | REGISTRAR
                        </div>
                    }
                    <div onClick={() => { navigate('/'); setMenuIsOpen(false) }} className='menu-item'>
                        INÍCIO
                    </div>
                    <div onClick={() => { navigate('/products'); setMenuIsOpen(false) }} className='menu-item'>
                        PRODUTOS
                    </div>
                    <div className='menu-item'>
                        AJUDE UM ANIMAL
                    </div>
                    <div onClick={() => { navigate('/contact'); setMenuIsOpen(false) }} className='menu-item'>
                        CONTATO
                    </div>
                </div>
            }
        </>
    );
}
export default Menu;
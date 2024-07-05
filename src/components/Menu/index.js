import { useContext } from 'react';
import { MenuContext } from '../../contexts/menuContext';
import './style.css'


function Menu() {
    const { menuIsOpen } = useContext(MenuContext);

    return (
        <>
            {menuIsOpen &&
                <div className='menu bounceInDown'>
                    <div className='menu-item'>
                        ENTRAR | REGISTRAR
                    </div>
                    <div className='menu-item'>
                        PRODUTOS
                    </div>
                    <div className='menu-item'>
                        AJUDE UM ANIMAL
                    </div>
                    <div className='menu-item'>
                        CONTATO
                    </div>
                </div>
            }
        </>
    );
}

export default Menu;
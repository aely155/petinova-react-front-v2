import { SlClose } from 'react-icons/sl';
import './style.css'
import { useContext, useState } from 'react';
import { PopUpContext } from '../../contexts/popUpContext';


function PopUp({ color, children, tittle, text, action, button }) {
    const { setIsOpen } = useContext(PopUpContext);

    const [visible, setVisible] = useState(true)
    const turnOff = () => {
        setVisible(false)
    }
    return (
        <>
            {visible &&
                <div onClick={()=>setIsOpen(false)} className='popup-container'>
                    <div
                        className="popup at-item"
                        style={{
                            backgroundColor: color
                        }}
                    >
                        <div className='popup-close'>
                            <SlClose onClick={() => setIsOpen(false)} color='white' size={25} />
                        </div>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default PopUp;
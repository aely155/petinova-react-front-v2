import './style.css'

function DesconectButton() {

    const desconect = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div onClick={desconect} className='desconect-button'>
            Sair
        </div>
    );
}

export default DesconectButton;
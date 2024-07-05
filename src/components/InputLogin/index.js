import './style.css'

function InputForm({ type = 'text', placeHolder, label, onchange, value }) {
    return (
        <div className='input-form'>
            <h2>{label}</h2>
            <input value={value} onChange={(e) => onchange(e.target.value)} type={type} placeholder={placeHolder} />
        </div>
    );
}

export default InputForm;
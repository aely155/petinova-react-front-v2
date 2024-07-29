import React, { useContext, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import LateralButtons from '../../components/LateralButtons';
import Cart from '../../components/Cart';
import PopUp from '../../components/PopUp';
import { PopUpContext } from '../../contexts/popUpContext';
import dogs from './dogs.png'
import './style.css'

const PetNutritionCalculator = () => {
    const apiUrl = process.env.REACT_APP_API_URL

    const [species, setSpecies] = useState('dog');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [activityLevel, setActivityLevel] = useState('medium');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');
    const { resultIsOpen, setResultIsOpen } = useContext(PopUpContext)

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.post(`${apiUrl}api/pet-food/calculate`, {
                species,
                age: parseFloat(age),
                weight: parseFloat(weight),
                activityLevel,
            });

            setResult(response.data);
            setError('');
            setResultIsOpen(true)
        } catch (err) {
            setError(err.response ? err.response.data : 'Erro ao calcular a nutrição');
            setResult('');
        }

    };

    return (
        <>
            {
                resultIsOpen &&
                <PopUp
                    close={() => setResultIsOpen(false)}
                    color={"#0064A2"}
                    style={{
                        textAlign: "center"
                    }}
                >
                    <img
                        style={{
                            height: "150px",
                            marginBottom: "-50px"
                        }}
                        src={dogs}
                    />
                    <div
                        style={{
                            marginTop: "50px",
                            fontFamily: "Poppins"
                        }}
                        dangerouslySetInnerHTML={{ __html: result }}
                    />
                </PopUp>
            }

            <Cart />
            <Header />
            <LateralButtons />
            <div className='petbutritioncalculator'>
                <h1>Calculadora de Nutrição para Animais</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Espécie:
                            <select value={species} onChange={(e) => setSpecies(e.target.value)}>
                                <option value="dog">Cão</option>
                                <option value="cat">Gato</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Idade (em anos):
                            <input
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                min="0"
                                step="any"
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Peso (em kg):
                            <input
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                min="0"
                                step="any"
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Nível de Atividade:
                            <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
                                <option value="low">Baixo</option>
                                <option value="medium">Médio</option>
                                <option value="high">Alto</option>
                            </select>
                        </label>
                    </div>
                    <button type="submit">Calcular</button>
                </form>

                {error && <p style={{ color: 'red' }}>{error}</p>}

            </div>
        </>
    );
};

export default PetNutritionCalculator;

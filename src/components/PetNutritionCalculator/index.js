import React, { useState } from 'react';
import axios from 'axios';

const PetNutritionCalculator = () => {
    const apiUrl = process.env. REACT_APP_API_URL
    const [species, setSpecies] = useState('dog');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [activityLevel, setActivityLevel] = useState('medium');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${apiUrl}/api/pet-food/calculate`, {
                species,
                age: parseFloat(age),
                weight: parseFloat(weight),
                activityLevel,
            });

            setResult(response.data.message);
            setError('');
        } catch (err) {
            setError(err.response ? err.response.data : 'Erro ao calcular a nutrição');
            setResult('');
        }
    };

    return (
        <div>
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
            <div
                dangerouslySetInnerHTML={{ __html: result }}
            />
        </div>
    );
};

export default PetNutritionCalculator;

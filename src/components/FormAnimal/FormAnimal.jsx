import './FormAnimal.css';
import { useState } from 'react';

function FormAnimal() {
    const [formData, setFormData] = useState({
        nomeAnimal: '',
        generoAnimal: '',
        idadeAnimal: ''
    });
    // Função para lidar com a mudança nos campos de entrada
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o recarregamento da página
        // Envia os dados do formulário para o servidor
        //console.log(JSON.stringify(formData));
        fetch("http://localhost:5432/new/ave", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao enviar formulário');
                }
                // Trate a resposta do servidor conforme necessário
                console.log('Formulário enviado com sucesso');
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    };

    return (

        <>
            <form onSubmit={handleSubmit}>
                <div className='cadastro'>
                    <h2>CADASTRO DE AVE</h2>
                    <label className='descricao'>
                        <input
                            type="text"
                            name="nomeAnimal"
                            value={formData.nomeAnimal}
                            onChange={handleChange}
                        />
                    </label>
                    <label className='descricao'>
                        <input
                            type="number"
                            name="idadeAnimal"
                            value={formData.idadeAnimal}
                            onChange={handleChange}
                        />
                    </label>
                    <label className='descricao'>
                        <select
                            name="generoAnimal"
                            value={formData.generoAnimal}
                            onChange={handleChange}
                        >
                            <option value="macho">Macho</option>
                            <option value="femea">Fêmea</option>
                            <option value="desconhecido">Desconhecido</option>
                        </select>
                    </label>

                    <button type="submit" className='descricao'>Enviar</button>
                </div>
            </form>
        </>
    );
}

export default FormAnimal;
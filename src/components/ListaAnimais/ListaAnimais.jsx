import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import AnimalRequests from '../../fetch/AnimalRequests';
import { BsFillTrash3Fill } from "react-icons/bs";

function ListaAnimais() {

    const [animais, setAnimais] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setAnimais(await AnimalRequests.listarAnimais());
        }

        fetchData();
    }, []);

    const deletarAnimal = async (id) => {
        const confirma = window.confirm(`Deseja deletar o animal com id ${id}`);
        if (confirma) {
            if (await AnimalRequests.deletarAnimal(id)) {
                window.alert('Animal deletado com sucesso');
                window.location.reload();
            } else {
                window.alert('Erro ao deletar o animal');
            }
        }
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Genero</th>
                        <th>Envergadura</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {animais.length > 0 ? (
                        animais.map((animal) => (
                            <tr key={animal.idanimal}>
                                <td>{animal.idanimal}</td>
                                <td>{animal.nomeanimal}</td>
                                <td>{animal.idadeanimal}</td>
                                <td>{animal.generoanimal}</td>
                                <td>{animal.envergadura}</td>
                                <td onClick={() => deletarAnimal(animal.idanimal)}><BsFillTrash3Fill /></td>
                            </tr>
                        )
                        )) : (
                        <tr>Carregando... Verifique se o servidor está funcionando</tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default ListaAnimais;
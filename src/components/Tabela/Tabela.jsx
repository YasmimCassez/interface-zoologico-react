import './Tabela.css'
import Table from 'react-bootstrap/Table';

function BasicExample() {

  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Gênero</th>
          <th>Envergadura</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Livia</td>
          <td>15</td>
          <td>Feminina</td>
          <td>1,70</td>
        </tr>
        <tr>
          <td>Palomares</td>
          <td>17</td>
          <td>Feminina</td>
          <td>1,65</td>
        </tr>
        <tr>
          <td>Luma</td>
          <td colSpan={2}>16</td>
          <td>1,67</td>
        </tr>
      </tbody>
    </Table>
    </>
  );
}

export default BasicExample;
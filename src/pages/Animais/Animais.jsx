import CardAnimal from '../../components/CardAnimal/CardAnimal';
import Navegacao from '../../components/Navegacao/Navegacao';
import './Animais.css'

function Animais() {
    const components = [];
    for(let i = 0; i <= 3; i++){
     components.push(<CardAnimal key = {i} />)
    }

    return(
    <>
    <Navegacao/>
    <h1 style={{color: 'black'}}>Animais</h1>
      <div className="ctn-cardanimais">
      {components}
    </div>
    </>
    )
}

export default Animais;
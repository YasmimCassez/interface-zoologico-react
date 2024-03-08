import './Home.css'
import Navegacao from '../../components/Navegacao/Navegacao';
import Atracao from '../../components/Atracao/Atracao';
import Welcome from '../../components/Welcome/Welcome';

function Home() {
    const components = [];
    for(let i = 0; i <= 2; i++){
     components.push(<Atracao key = {i} />)
    }
    return(
        <>
        <Navegacao></Navegacao>
        <Welcome></Welcome>
      <div className="ctn-atracoes">
      {components}
      </div>
        </>
    )
}

export default Home;
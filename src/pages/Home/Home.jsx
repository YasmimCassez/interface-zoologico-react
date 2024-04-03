import './Home.css'
import Navegacao from '../../components/Navegacao/Navegacao';
import Atracao from '../../components/Atracao/Atracao';
import Welcome from '../../components/Welcome/Welcome';
import FormAnimal from '../../components/FormAnimal/FormAnimal';

function Home() {
  const components = [];
  for (let i = 0; i <= 2; i++) {
    components.push(<Atracao key={i} />)
  }
  return (
    <>
      <Navegacao></Navegacao>
      {/* <Welcome></Welcome>
        <h1 style={{color: 'black'}}>Atracao</h1>
      <div className="ctn-atracoes">
      {components}
      </div> */}
      <FormAnimal></FormAnimal>
    </>
  )
}

export default Home;
import './App.css'
import Home from './pages/Home/Home';

function App() {
   const components = [];
   for(let i = 0; i <= 2; i++){
    components.push(<Atracao key = {i} />)
   }
  return (
    <>
     <Home/>
    </>
  )
}

export default App

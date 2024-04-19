import Home from './pages/Home/Home';
import Animais from './pages/Animais/Animais';
import { BrowserRouter as Roteador, Routes, Route } from 'react-router-dom'
import Depoimentos from './components/Depoimentos/Depoimentos';
import Fotos from './components/Fotos/Fotos';
import Login from './components/Login/Login'

function AppRoutes () {
    return (
        <>
             <Roteador>
              <Routes>
                <Route exact path='/' Component={Home} />
                <Route path='/animais' Component={Animais} />
                <Route path='/depoimentos' Component={Depoimentos} />
                <Route path='/fotos' Component={Fotos} />
                <Route path='/login' Component={Login} />
              </Routes>
             </Roteador>
        </>
    );

}

export default AppRoutes;
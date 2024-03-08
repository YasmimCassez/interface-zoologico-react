import './Navegacao.css'
import { Link } from 'react-router-dom';

function Navegacao () {

        return(
            <div className="barra-navegacao"> {/** fragment */}
                <div className='logo-zoo'>
                        <h1>Zoologico</h1>
                </div>
                    
                <div className="navbar-opcoes">
                    <ul>
                        <li>
                        <Link style={{color: "#A7A000"}} to= "/">Início </Link>
                        </li>
                        
                        <li>
                        <Link style={{color: "#A7A000"}} to= "/animais">Os animais</Link>
                        </li>
                        
                        <li>
                            <Link style={{color: "#A7A000"}} to= "/fotos">Fotos</Link>
                        </li>

                        <li>
                            <Link style={{color: "#A7A000"}} to= "/depoimentos">Depoimentos</Link>
                        </li>

                        <li>
                        <Link style={{color: "#A7A000"}} to= "/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
}

export default Navegacao;
import logo from './logo.svg';
import './App.css';
import ConteudoLateralEsquerda from './componentes/estatico/conteudoLaterilEsquerdo/ConteudoLateralEsquerda';
import ConteudoCentral from './componentes/conteudoCentral/ConteudoCentral';
import Direita from './componentes/conteudoDireito/ConteudoLateralDireita'
// JSX 

function App() {
  return (
    <>
      
      <div className='conteudoLateralEsquerda'>
        <ConteudoLateralEsquerda/>
      </div>  

      <div className='conteudoCentral'>
        <ConteudoCentral />
      </div>
      
      <div className='conteudoLateralDireita'>
        <Direita />
      </div>
    </>
  );
}

export default App;

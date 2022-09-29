import Header from './header/Header'
import QuemSou from './quemSou/quemSou'
import TituloLinhaTempo from './tituloLinhaTempo/tituloLinhaTempo'
import LinhaTempo from './linhaTempo/linhaTempo'
import Menu from './menu/menu'
import Contato from './contato/contato'
import MenuMobile from './menuMobile/menuMobile'
import Inicio from './header/inicio'

export default function App() {
  return (
    <div className="App">
      <Inicio/>
      <Menu/>
      <MenuMobile />
      <Header />
      <QuemSou />
      <TituloLinhaTempo />
      <LinhaTempo />
      <Contato />
    </div>
  );
}



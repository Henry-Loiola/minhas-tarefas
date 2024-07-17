import BotaoAdicionar from "../../components/BotaoAdicionar";
import BarraLateral from "../../containers/Barra Lateral";
import ListaDeTarefas from "../../containers/ListaDeTarefas";

const Home = () => (
  <>
    <BarraLateral mostrarFiltros/>
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home

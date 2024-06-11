import { Header } from "./components/Header";
import Post from "./Post";

import "./global.css";

function App() {
  return (
    <div>
      <Header />

      <Post autor="Julia" conteudo="dobalacubaco" />
      <Post autor="Vitu" conteudo="upalele" />
    </div>
  );
}

export default App;

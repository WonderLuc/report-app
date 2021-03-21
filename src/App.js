import './App.css';
import Main from "./Main/Main.js";

function App() {
  return (
    <div>
      <header>
        <h2>Отчеты</h2>
      </header>
      <Main reports={[{text:"Hello"},{text:"World"}]}/>
      <footer>
        <h2><a hfer="">Обратная связь</a></h2>
      </footer>
    </div>
  );
}

export default App;

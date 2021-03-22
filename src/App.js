import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Fragment } from 'react/cjs/react.production.min';
import './App.css';
import Main from "./Main/Main.js";
import DoctorDairy from './DoctorDairy/DoctorDairy';

function App() {
  return (
    <Fragment>
        <Router>
          <header>
            <h2><Link to="/" className="link">Отчеты</Link></h2>
          </header>
          <footer>
            <h2><a hfer="">Обратная связь</a></h2>
          </footer>
          {
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path={`/doctor-dairy`}>
              <DoctorDairy />
            </Route>
          </Switch>
        }
        </Router> 
      </Fragment>
  );
}

export default App;

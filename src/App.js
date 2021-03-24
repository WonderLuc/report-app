import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Fragment } from 'react/cjs/react.production.min';
import './App.css';
import DoctorDairy from './DoctorDairy/DoctorDairy';
import ReportSelect from "./ReportSelect/ReportSelect";

function App() {
  return (
    <Fragment>
        <Router>
          <header>
            <h2><Link to="/" className="link">Отчеты</Link></h2>
          </header>
          <main className="content">
          {
            <Switch>
              <Route exact path="/">
                <ReportSelect />
              </Route>
              <Route path={`/doctor-dairy`}>
                <DoctorDairy />
              </Route>
            </Switch>
          }
          </main>
          <footer>
            <h2><a hfer="">Обратная связь</a></h2>
          </footer>
         
        </Router> 
      </Fragment>
  );
}

export default App;

import "./ReportSelect.css";
import {Link} from 'react-router-dom';

function ReportSelect(props){
  
  return (
    <nav className="reports">
      <div className="report">
        <h2 className="report__text">Дневник Работы Врача</h2>
        <Link className="report__link" to={`/doctor-dairy`}>Заполнить</Link>
      </div>
    </nav>
    
  )
}

export default ReportSelect;